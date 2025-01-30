<?php
/**
 * Callbacks functions
 *
 * @package mik
 */

if ( ! function_exists( 'mik_slider_section_enable' ) ) :
	/**
	 * Check if slider_section section enabled.
	 *
	 * @param WP_Customize_Control $control WP_Customize_Control instance.
	 * @return bool Whether the control is active to the current preview.
	 */
	function mik_slider_section_enable( $control ) {
		return $control->manager->get_setting( 'mik_theme_options[enable_slider]' )->value() ? true : false;
	}
endif;

if ( ! function_exists( 'mik_introduction_section_enable' ) ) :
	/**
	 * Check if introduction_section section enabled.
	 *
	 * @param WP_Customize_Control $control WP_Customize_Control instance.
	 * @return bool Whether the control is active to the current preview.
	 */
	function mik_introduction_section_enable( $control ) {
		return $control->manager->get_setting( 'mik_theme_options[enable_introduction]' )->value() ? true : false;
	}
endif;

if ( ! function_exists( 'mik_featured_section_enable' ) ) :
	/**
	 * Check if featured_section section enabled.
	 *
	 * @param WP_Customize_Control $control WP_Customize_Control instance.
	 * @return bool Whether the control is active to the current preview.
	 */
	function mik_featured_section_enable( $control ) {
		return $control->manager->get_setting( 'mik_theme_options[enable_featured]' )->value() ? true : false;
	}
endif;

if ( ! function_exists( 'mik_cta_section_enable' ) ) :
	/**
	 * Check if cta_section section enabled.
	 *
	 * @param WP_Customize_Control $control WP_Customize_Control instance.
	 * @return bool Whether the control is active to the current preview.
	 */
	function mik_cta_section_enable( $control ) {
		return $control->manager->get_setting( 'mik_theme_options[enable_cta]' )->value() ? true : false;
	}
endif;

if ( ! function_exists( 'mik_latest_blog_section_enable' ) ) :
	/**
	 * Check if latest_blog_section section enabled.
	 *
	 * @param WP_Customize_Control $control WP_Customize_Control instance.
	 * @return bool Whether the control is active to the current preview.
	 */
	function mik_latest_blog_section_enable( $control ) {
		return $control->manager->get_setting( 'mik_theme_options[enable_latest_blog]' )->value() ? true : false;
	}
endif;
