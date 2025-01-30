<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the website, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://developer.wordpress.org/advanced-administration/wordpress/wp-config/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'fira_cv' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', '' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         '*:u$Nx.}i*j7f^7va-|-a.>%PFI*3&w6?0+%BS3{QtLQIYf92DN%6$^Moqgv2/!l' );
define( 'SECURE_AUTH_KEY',  '}|=F.xf*<^LuSkUu}7{;J-~i<0=ft.Z4tp#u6WY3sgacRaE,_`ud$(@.].`21lfm' );
define( 'LOGGED_IN_KEY',    '4($wW2,B$uo4[L^mSJ$tw0L@0T~ 3+6o&=YiN0*k&}d(*7w5IN5dylL>WbJBpGC+' );
define( 'NONCE_KEY',        ':6DL]=*5Br:;WbP1i=TUS/iS-:l4tV/d,ys;C+)rHy8xrP+mD$,*ZPP*JI6C@>(h' );
define( 'AUTH_SALT',        'giA_GwqI~mE?N]O22yJ]e$d2[<)8@n,^ZKM>aK%>$}<z?-O7bI(IDs;wdv24_6R:' );
define( 'SECURE_AUTH_SALT', ';1/MhYirSM#;vpGEaqUp4/AALD-Vx<[*Y2=hks4I/^ %KoLUs$gm%UK6_EzhIod)' );
define( 'LOGGED_IN_SALT',   '?l`/d1q_eE.)8x-d)W(bRNuo$TmglD~ RsX-YZW};@|D&Xen79&*iI@_h2ed,J} ' );
define( 'NONCE_SALT',       'x5!_SZZ%XXNOnj3qcUNDgN2^KtbNhn:51D9elh,xAFZ|w%f1{Fp5MSr(1F8?BnW|' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 *
 * At the installation time, database tables are created with the specified prefix.
 * Changing this value after WordPress is installed will make your site think
 * it has not been installed.
 *
 * @link https://developer.wordpress.org/advanced-administration/wordpress/wp-config/#table-prefix
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://developer.wordpress.org/advanced-administration/debug/debug-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
