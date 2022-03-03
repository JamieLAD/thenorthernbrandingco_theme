<?php
/**
 * Template Name: White Body Template
 * Description: A Page Template with a lighter design
 */

$context = Timber::context();

$timber_post     = new Timber\Post();
$context['post'] = $timber_post;
Timber::render( array( 'page-' . $timber_post->post_name . '.twig', 'page-white.twig' ), $context );
