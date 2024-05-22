import { allExportedApi } from "@/utils/apis/Apis";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import formClose from '../assets/headerAssets/formclose.png'

export default function MultistepForm({ onHideForm, onCompleteForm }) {
    const [formData, setFormData] = useState(null);
    const [selectedOptions, setSelectedOptions] = useState({});
    const [selectedRedirection, setSelectedRedirection] = useState(null);
    const api = allExportedApi();

    useEffect(() => {
        const fetchData = async () => {
            const data = await api.multistepFormApi();
            setFormData(data[0].acf); // Assuming the API returns an array with the form data at index 0
        };

        fetchData();
    }, []);

    const handleOptionClick = (index, optIndex, redirectionLink, redirectOption) => {
        setSelectedOptions((prev) => ({
            ...prev,
            [index]: optIndex,
        }));

        if (redirectionLink) {
            setSelectedRedirection(redirectionLink);
        } else if (redirectOption) {
            setSelectedRedirection(redirectOption);
        } else {
            setSelectedRedirection(null); // Reset if no redirection link or option is provided
        }
    };

    if (!formData) {
        return <div>Loading...</div>;
    }

    return (
        <div className="multistep_form_outer">
            <div className="multistep_form_inner">
                <div className="form_heading_section">
                    <div className="form_heading_close_btn">
                        <h2>{formData.form_heading_one}</h2>
                        <div className="cf7_right_section">
                            <div className="close_button">
                                <button onClick={onHideForm} className="close_button">
                                    <img src={formClose.src} alt="" />
                                </button>
                            </div>
                        </div>
                    </div>
                    <h3>{formData.form_heading_two}</h3>
                    <p>{formData.form_heading_three}</p>
                </div>
                <div className="form_questions_section">
                    {formData.form_questions_outer.map((question, index) => (
                        <div key={index} className="form_question_block">
                            <h4>{question.form_question}</h4>
                            <div className="form_options">
                                {question.options_for_question.map((option, optIndex) => (
                                    <div key={optIndex} className="form_option">
                                        <label>
                                            <input
                                                type="radio"
                                                name={`question-${index}`}
                                                onClick={() =>
                                                    handleOptionClick(
                                                        index,
                                                        optIndex,
                                                        option.nested_options ? null : option.nested_option_redirection,
                                                        option.redirect_main_option
                                                    )
                                                }
                                            />
                                            {option.choose_one_options_for_question}
                                        </label>
                                        {selectedOptions[index] === optIndex && option.nested_options && (
                                            <div className="nested_options">
                                                {option.nested_options.map((nestedOption, nestedIndex) => (
                                                    <div key={nestedIndex} className="nested_option">
                                                        <label>
                                                            <input
                                                                type="radio"
                                                                name={`nested-question-${index}-${optIndex}`}
                                                                onClick={() => setSelectedRedirection(nestedOption.nested_option_redirection)}
                                                            />
                                                            {nestedOption.nested_options_tittle}
                                                        </label>
                                                    </div>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                            <div className="form_redirection_btn">
                                {selectedOptions[index] !== undefined && selectedRedirection && (
                                    <Link href={selectedRedirection} onClick={onCompleteForm}>Next</Link>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
