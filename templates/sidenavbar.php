<div class="sidenav navbar navbar-inverse" data-spy="affix" role="sidenav">
    <div class="navbar-header">
      <button type="button" class="navbar-toggle navbar" data-toggle="collapse" data-target=".navbar-collapse">
        <span class="sr-only">Toggle navigation</span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </button>
    </div>
      <div class="collapse navbar-collapse affix" role="navigation" >
      <div class="navlogo">
      <img src="/assets/img/cwlogo.png">
      </div>     
      <?php
        if (has_nav_menu('side_navigation')) :
            wp_nav_menu(array('theme_location' => 'side_navigation', 'menu_class' => 'nav nav-pills nav-stacked'));
        endif;
        ?>
      </div>
</div>