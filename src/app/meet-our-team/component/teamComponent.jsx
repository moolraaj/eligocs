'use client';
import React, { useEffect, useState } from 'react';
import { emptyImage } from '../../../../public/assets/images';
import { allExportedApi } from '@/utils/apis/Apis';

function TeamComponent() {
    const api = allExportedApi();
    const [result, setResult] = useState([]);
    const [popup, setPopup] = useState({ isVisible: false, image: null });
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [loading, setLoading] = useState(true);

    const loadMeetTeamPageLists = async () => {
        try {
            let response = await api.fetchMeetOurTeam();
            setResult(response);
        } catch (error) {
            // Handle error if needed
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        setLoading(true);
        loadMeetTeamPageLists();
    }, []);

    const groupMembersByCategory = () => {
        const groupedMembers = {};
        result.forEach(member => {
            member.team_category.forEach(category => {
                if (!groupedMembers[category]) {
                    groupedMembers[category] = [];
                }
                groupedMembers[category].push(member);
            });
        });
        return groupedMembers;
    }

    const handleImageClick = (image) => {
        setPopup({ isVisible: true, image });
    }

    const closePopup = () => {
        setPopup({ isVisible: false, image: null });
    }

    const handleCategoryChange = (event) => {
        setSelectedCategory(event.target.value);
    }

    const filteredMembers = (members) => {
        if (selectedCategory === 'All') {
            return members;
        }
        return members.filter(member =>
            member.team_category.includes(selectedCategory) ||
            (member.team_subcategory && member.team_subcategory.includes(selectedCategory))
        );
    }

    const extractCategoriesAndSubcategories = () => {
        const categories = new Set();
        const subcategories = new Map();

        result.forEach(member => {
            member.team_category.forEach(category => {
                categories.add(category);
                if (member.team_subcategory && member.team_subcategory.length > 0) {
                    if (!subcategories.has(category)) {
                        subcategories.set(category, new Set());
                    }
                    member.team_subcategory.forEach(subcategory => {
                        subcategories.get(category).add(subcategory);
                    });
                }
            });
        });

        return { categories: Array.from(categories), subcategories };
    }

    const predefinedOrder = [
        'Managing Director',
        'Team Management',
        'Business Development',
        'Web Designer',
        'Web Developer',
        'Sales Executive'
    ];

    const { categories, subcategories } = extractCategoriesAndSubcategories();

    const sortedCategories = categories.sort((a, b) => {
        const indexA = predefinedOrder.indexOf(a);
        const indexB = predefinedOrder.indexOf(b);

        if (indexA === -1 && indexB === -1) {
            return a.localeCompare(b); // Sort newly added categories alphabetically
        }
        if (indexA === -1) {
            return 1; // a is newly added, so it should come last
        }
        if (indexB === -1) {
            return -1; // b is newly added, so it should come last
        }
        return indexA - indexB;
    });

    const renderCategorySection = (category, members) => {
        const filteredCategoryMembers = filteredMembers(members);
        if (filteredCategoryMembers.length === 0) {
            return null; // Skip rendering this category if no members match the filter
        }
        return (
            <div className="member_view_inner" key={category}>
                <div className="category_header">
                    <h2>{category}</h2>
                </div>
                <div className="category_section">
                    {filteredCategoryMembers.map((member, index) => (
                        <div className={`team_member_section ${index % 2 === 0 ? 'even' : 'odd'}`} key={member.id}>
                            {member.acf.our_team_designation.includes('TL') && (
                                <span className="badge">TL</span>
                            )}
                            <div className="memebr_left_section">
                                <div className="team-member_image" onClick={() => handleImageClick(member.acf.our_team_image || emptyImage.src)}>
                                    <img src={member.acf.our_team_image || emptyImage.src} alt="" />
                                    <p dangerouslySetInnerHTML={{ __html: member.acf.our_team_description.slice(0, 70) }}></p>
                                    <div className="team_member_description"></div>
                                </div>
                            </div>
                            <div className="member_right_section">
                                <div className="member_informations_section">
                                    <div className='members_image_mobile'>
                                        <img src={member.acf.our_team_image || emptyImage.src} alt="our_team_image" style={{ width: '100px', height: '100px', objectFit: 'cover' }} />
                                    </div>
                                    <div className="member_name">
                                        <h4>{member.acf.our_team_name}</h4>
                                    </div>
                                    <div className="member_designation">
                                        <p>{member.acf.our_team_designation}</p>
                                    </div>
                                    <div className="member_name">
                                        {Array.isArray(member.acf?.our_team_social_connectivity) ? (
                                            member.acf.our_team_social_connectivity.map((icons, index) => (
                                                <div className="team_social_icon_wrapper" key={index}>
                                                    <div className="member_social_icons">
                                                        <a href={icons.social_link || ""} target='_blank'><img src={icons.our_team_social_media || emptyImage.src} alt='social icons' /></a>
                                                    </div>
                                                </div>
                                            ))
                                        ) : (
                                            ""
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        );
    };

    const newCategories = sortedCategories.filter(category => !predefinedOrder.includes(category));
    const orderedCategories = [...sortedCategories.filter(category => predefinedOrder.includes(category)), ...newCategories];

    return (
        <>
            <div className="team_component_outer">
                <div className="filter_section">
                    <label htmlFor="categoryFilter">Filter by team role: </label>
                    <select id="categoryFilter" value={selectedCategory} onChange={handleCategoryChange}>
                        <option value="All">All</option>
                        {orderedCategories.map(category => (
                            <React.Fragment key={category}>
                                <option value={category}>{category}</option>
                                {subcategories.get(category) && Array.from(subcategories.get(category)).map(subcategory => (
                                    <option key={subcategory} value={subcategory}>
                                        &nbsp;&nbsp;{subcategory}
                                    </option>
                                ))}
                            </React.Fragment>
                        ))}
                    </select>
                </div>
                <div className="member_view_section">
                    {loading ? (
                        <p className="loading_data">Loading...</p>
                    ) : (
                        orderedCategories.map(category => renderCategorySection(category, groupMembersByCategory()[category]))
                    )}

                    {popup.isVisible && (
                        <div className="popup_overlay" onClick={closePopup}>
                            <div className="popup_content">
                                <img src={popup.image} alt="Popup" />
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}

export default TeamComponent;
