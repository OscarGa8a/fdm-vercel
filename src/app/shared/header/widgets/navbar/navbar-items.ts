// Menu
export interface Menu {path?: string;
  title?: string;
  type?: string;
  megaMenu?: boolean;
  megaMenuType?: string; // small, medium, large
  image?: string;
  children?: Menu[];
}

export const MENUITEMS: Menu[] = [
	{
		title: 'hombres', path: '/home/shop/men', type: 'link'
	},
	{
		title: 'mujeres', /*type: 'sub'*/ type: 'link', path: '/home/shop/women'
		/*, children: [
			{ path: '/helpcenter/blog/left-sidebar', title: 'blog-left-sidebar', image: 'assets/images/feature/blog-page.jpg', type: 'link' },
			{ path: '/home/shop/all', title: 'category-left-sidebar', image: 'assets/images/feature/category-page.jpg', type: 'link' },
			{ path: '/home/no-sidebar/shop/all', title: 'category-no-sidebar', image: 'assets/images/feature/category-page(no-sidebar).jpg', type: 'link' }
		]*/
	},
	{
		title: 'niños y bebés', type: 'sub', children: [
			{ path: '/home/left-image/product/1', title: 'detalle del producto', image: 'assets/images/feature/product-page(left-image).jpg', type: 'link' },
		]
	},
	{
		title: 'Accesorios y más', path: '/home/shop/accesorios', type: 'link'
	},
	{
		title: 'fechas especiales', type: 'sub', children: [
			{path: '/pages/collections/mansory', title: 'collections',  type: 'link'},
			{ path: '/pages/cart', title: 'cart', type: 'link' },
			{ path: '/pages/wishlist', title: 'wishlist', type: 'link' },
			{ path: '/pages/checkout', title: 'checkout', type: 'link' },
			{ path: '/pages/contact', title: 'contact', type: 'link' },
			{ path: '/pages/404', title: '404', type: 'link'}
		]
	},
	{
		title: 'colecciones', type: 'sub', path: '/pages/collections/all' , megaMenu: true, megaMenuType: 'large', children: [
			{
				title: 'mens-fashion',  type: 'link', children: [
					{ path: '/home/shop/all', title: 'sports-wear',  type: 'link' },
					{ path: '/home/shop/all', title: 'top',  type: 'link' },
					{ path: '/home/shop/all', title: 'bottom',  type: 'link' },
					{ path: '/home/shop/all', title: 'ethic-wear',  type: 'link' },
					{ path: '/home/shop/all', title: 'sports-wear',  type: 'link' },
					{ path: '/home/shop/all', title: 'shirts',  type: 'link' }
				]
			},
			{
				title: 'women-fashion',  type: 'link', children: [
					{ path: '/home/shop/all', title: 'dresses',  type: 'link' },
					{ path: '/home/shop/all', title: 'skirts',  type: 'link' },
					{ path: '/home/shop/all', title: 'westarn-wear',  type: 'link' },
					{ path: '/home/shop/all', title: 'ethic-wear',  type: 'link' },
					{ path: '/home/shop/all', title: 'sports-wear',  type: 'link' },
					{ path: '/home/shop/all', title: 'bottom-wear',  type: 'link' }
				]
			},
			{
				title: 'kids-fashion',  type: 'link', children: [
					{ path: '/home/shop/all', title: 'sports-wear',  type: 'link' },
					{ path: '/home/shop/all', title: 'ethic-wear',  type: 'link' },
					{ path: '/home/shop/all', title: 'sports-wear',  type: 'link' },
					{ path: '/home/shop/all', title: 'top',  type: 'link' },
					{ path: '/home/shop/all', title: 'bottom-wear',  type: 'link' },
					{ path: '/home/shop/all', title: 'ethic-wear',  type: 'link' }
				]
			},
		]
	},
	{
		title: 'personalizar', path: '/custom', type: 'link'
	},
];
