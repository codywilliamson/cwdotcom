<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'williamsonBlog' );

/** MySQL database username */
define( 'DB_USER', 'williamson' );

/** MySQL database password */
define( 'DB_PASSWORD', 'RiWyNH9djAylIvlx' );

/** MySQL hostname */
define( 'DB_HOST', 'localhost' );

/** Database Charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The Database Collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         '+ViOY7$m SiEj_qg(.v}1jV8)051Zd4*mU5Jc&sw*_azMN2)>)X11g]CI,(mfzf;' );
define( 'SECURE_AUTH_KEY',  'ey!I{FSfe7aevB@g<PWh[&UWDV&JW8m-]uy}1L`Em9*R<N#Qte@z8xQQh;BNAEp>' );
define( 'LOGGED_IN_KEY',    'md).eO3|u]].P+,cU{yP:[}Td9_$#YO[/><<9/W#:zpBeJTqa*yt@q8G69;?<PM|' );
define( 'NONCE_KEY',        '6r5AW8%Rb+2@YmZ2cPluP3fR5)<LlAz?*62rCRH@03f{p sk@v*a3`WWps)~V*[E' );
define( 'AUTH_SALT',        'W;zO/WCh{,):pSG_ybM}&rX2;Xm3azx7j_GaIOY9?XE^>t8p*?*+4x]zK1,JCEat' );
define( 'SECURE_AUTH_SALT', '=:[PT=3ESf+y;*<rX6e]Xdc{,qi$b7v=bQ]?UW5T@$?t!AMsF6`P<RuhG.B42/Bi' );
define( 'LOGGED_IN_SALT',   '_?>/XF:<iP<a[?XUUAQ6Eryd#hIEa0U(cN$^O[l1Wr=nebIH%l.?<0Y+%X=lf_0S' );
define( 'NONCE_SALT',       '}d+R:Nwm.>eZ^Y,%}1} ECr ^yq~8qFOV{h{e3Zx.r7d+qv%^F+}r#<8_i5Kk!rv' );

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
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
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define( 'WP_DEBUG', false );

/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', dirname( __FILE__ ) . '/' );
}

/** Sets up WordPress vars and included files. */
require_once( ABSPATH . 'wp-settings.php' );
