// Menu
export interface Menu {
  path?: string;
  title?: string;
  type?: string;
  megaMenu?: boolean;
  children?: Menu[];
}

export const MENUITEMS: Menu[] = [
	{
		title: 'clothing', type: 'sub', megaMenu: true, children: [
	      { 
	      	title: 'mens fashion',  type: 'link', children: [
		      	{ path: '/home/shop/all', title: 'sports wear',  type: 'link' },
		      	{ path: '/home/shop/all', title: 'top',  type: 'link' },
		      	{ path: '/home/shop/all', title: 'bottom',  type: 'link' },
		      	{ path: '/home/shop/all', title: 'ethic wear',  type: 'link' },
		      	{ path: '/home/shop/all', title: 'sports wear',  type: 'link' },
		      	{ path: '/home/shop/all', title: 'shirts',  type: 'link' },
		        { path: '/home/shop/all', title: 'bottom',  type: 'link' },
		      	{ path: '/home/shop/all', title: 'ethic wear',  type: 'link' },
		      	{ path: '/home/shop/all', title: 'sports wear',  type: 'link' }
	      	]
	      },
	      { 
	      	title: 'women fashion',  type: 'link', children: [
		      	{ path: '/home/shop/all', title: 'dresses',  type: 'link' },
		      	{ path: '/home/shop/all', title: 'skirts',  type: 'link' },
		      	{ path: '/home/shop/all', title: 'westarn wear',  type: 'link' },
		      	{ path: '/home/shop/all', title: 'ethic wear',  type: 'link' },
		      	{ path: '/home/shop/all', title: 'bottom',  type: 'link' },
		      	{ path: '/home/shop/all', title: 'ethic wear',  type: 'link' },
		      	{ path: '/home/shop/all', title: 'sports wear',  type: 'link' },
		      	{ path: '/home/shop/all', title: 'sports wear',  type: 'link' },
		      	{ path: '/home/shop/all', title: 'bottom wear',  type: 'link' }
	      	]
	      },
	    ]
	},
	{
		title: 'bags', type: 'sub', children: [
		  { path: '/home/shop/all', title: 'shopper bags', type: 'link' },
		  { path: '/home/shop/all', title: 'laptop bags', type: 'link' },
		  { path: '/home/shop/all', title: 'clutches', type: 'link' },
		  { 
		  	path: '/home/shop/all', title: 'purses', type: 'link', children: [
		      	{ path: '/home/shop/all', title: 'purses',  type: 'link' },
		      	{ path: '/home/shop/all', title: 'wallets',  type: 'link' },
		      	{ path: '/home/shop/all', title: 'leathers',  type: 'link' },
		      	{ path: '/home/shop/all', title: 'satchels',  type: 'link' }
	      	]
		  },
	    ]
	},
	{
		title: 'footwear', type: 'sub', children: [
		  { path: '/home/shop/all', title: 'sport shoes', type: 'link' },
		  { path: '/home/shop/all', title: 'formal shoes', type: 'link' },
		  { path: '/home/shop/all', title: 'casual shoes', type: 'link' }
		]
	},
	{
		path: '/home/shop/all', title: 'watches', type: 'link'
	},
	{
		title: 'Accessories', type: 'sub', children: [
		  { path: '/home/shop/all', title: 'fashion jewellery', type: 'link' },
		  { path: '/home/shop/all', title: 'caps and hats', type: 'link' },
		  { path: '/home/shop/all', title: 'precious jewellery', type: 'link' },
		  { 
		  	path: '/home/shop/all', title: 'more..', type: 'link', children: [
		      	{ path: '/home/shop/all', title: 'necklaces',  type: 'link' },
		      	{ path: '/home/shop/all', title: 'earrings',  type: 'link' },
		      	{ path: '/home/shop/all', title: 'rings & wrist wear',  type: 'link' },
		      	{ 
		      		path: '/home/shop/all', title: 'more...',  type: 'link', children: [
				      	{ path: '/home/shop/all', title: 'ties',  type: 'link' },
				      	{ path: '/home/shop/all', title: 'cufflinks',  type: 'link' },
				      	{ path: '/home/shop/all', title: 'pockets squares',  type: 'link' },
				      	{ path: '/home/shop/all', title: 'helmets',  type: 'link' },
				      	{ path: '/home/shop/all', title: 'scarves',  type: 'link' },
				      	{ 
				      		path: '/home/shop/all', title: 'more...',  type: 'link', children: [
						      	{ path: '/home/shop/all', title: 'accessory gift sets',  type: 'link' },
						      	{ path: '/home/shop/all', title: 'travel accessories',  type: 'link' },
						      	{ path: '/home/shop/all', title: 'phone cases',  type: 'link' }
				      		]
				      	},
				    ]
		      	}
	      	]
		  },
	    ]
	},
	{
		path: '/home/shop/all', title: 'house of design', type: 'link'
	},
	{
		title: 'beauty & personal care', type: 'sub', children: [
		  { path: '/home/shop/all', title: 'makeup', type: 'link' },
		  { path: '/home/shop/all', title: 'skincare', type: 'link' },
		  { path: '/home/shop/all', title: 'premium beaty', type: 'link' },
		  { 
		  	path: '/home/shop/all', title: 'more..', type: 'link', children: [
		      	{ path: '/home/shop/all', title: 'fragrances',  type: 'link' },
		      	{ path: '/home/shop/all', title: 'luxury beauty',  type: 'link' },
		      	{ path: '/home/shop/all', title: 'hair care',  type: 'link' },
		      	{ path: '/home/shop/all', title: 'tools & brushes',  type: 'link' }
	      	]
		  },
	    ]
	},
	{
		path: '/home/shop/all', title: 'home & decor', type: 'link'
	},
	{
		path: '/home/shop/all', title: 'kitchen', type: 'link'
	},
]
