<?php get_template_part('templates/head'); ?>
<body <?php body_class(); ?>>
  <!--[if lt IE 8]>
    <div class="alert alert-warning">
      <?php _e('You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> to improve your experience.', 'roots'); ?>
    </div>
  [endif]-->

  <div class="wrap container-fluid" role="document">
    <div class="content row">
        <?php if (roots_display_sidenavbar()) : ?>
            <div class="<?php echo roots_sidenavbar_class(); ?>">
                <section class="side-nav-wrapper">
                    <?php get_template_part('templates/sidenavbar'); ?>
                </section>
            </div><!-- /.sidenavbar -->
        <?php endif; ?>
        <?php  if ( is_front_page() ) { ?>
            <?php get_template_part('templates/header'); ?>
            <div class="mainhome <?php echo roots_main_class(); ?>" role="main">
            <?php include roots_template_path(); ?>
            </div> 
        <?php } else { ?>
            <div class="main <?php echo roots_main_class(); ?>" role="main">
	            <div class="logocenter hidden-lg hidden-md hidden-sm">
		            <img src="/assets/img/cwname.png" class="img-responsive">
		        </div>
            <?php include roots_template_path(); ?>
            </div>
        <? } ?>
        <!-- /.main -->
    </div><!-- /.content -->
  </div><!-- /.wrap -->


  <?php get_template_part('templates/footer'); ?>

</body>
</html>
