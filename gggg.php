<?php

/// Add all categories to the response when requested
function add_courses_categories_to_collection($response) {
    $categories = get_terms(array(
        'taxonomy' => 'course_category',
        'hide_empty' => false,
    ));

    $category_names = array_map(function($category) {
        return $category->name;
    }, $categories);

    if (!is_wp_error($categories)) {
        $response = array(
            'all_categories' => $category_names,
            'courses' => $response // Assuming $response contains the array of blog posts
        );
    }

    return $response;
}



function add_all_all_categories_param($params) {
    $params['all_categories'] = array(
        'description' => 'Include all categories at the top of the response',
        'type' => 'boolean',
        'default' => false,
    );

    return $params;
}

function customize_rest_courses_posts_collection($response, $handler, $request) {
    if (isset($request['all_categories']) && $request['all_categories']) {
        $response->data = add_courses_categories_to_collection($response->data);
    }

    return $response;
}

add_filter('rest_post_collection_params', 'add_all_all_categories_param');
add_filter('rest_post_dispatch', 'customize_rest_courses_posts_collection', 10, 3);

?>