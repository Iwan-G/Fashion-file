import bcrypt from 'bcryptjs';

const data = {

  users: [
    {
      name: 'Iwan',
      email: 'admin@example.com',
      password: bcrypt.hashSync('1234', 8),
      isAdmin: true,
    },
    {
      name: 'Koko',
      email: 'user@example.com',
      password: bcrypt.hashSync('1234', 8),
      isAdmin: false,
    },
  ],

    products: [
      {
      
        name: 'Botanica Dress',
        category: 'Dress',
        image: '/images/dress1.jpg',
        price: 120.00,
        countInStock: 10,
        rating: 4.5,
        numReviews: 10,
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur ipsum ab explicabo possimus, tenetur, veritatis quam porro vitae libero provident hic! Dolores error explicabo exercitationem facere adipisci est ipsa! Iure. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe qui dolore perferendis facere ad cumque id culpa quasi necessitatibus similique accusamus, dolorum animi excepturi sed! Cupiditate laboriosam voluptate nihil velit?',
      },
      {
        
        name: 'Whimsical Dress',
        category: 'Dress',
        image: '/images/dress2.jpg',
        price: 100.00,
        countInStock: 20,
        rating: 4.0,
        numReviews: 10,
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur ipsum ab explicabo possimus, tenetur, veritatis quam porro vitae libero provident hic! Dolores error explicabo exercitationem facere adipisci est ipsa! Iure. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe qui dolore perferendis facere ad cumque id culpa quasi necessitatibus similique accusamus, dolorum animi excepturi sed! Cupiditate laboriosam voluptate nihil velit?',
      },
      {
       
        name: 'Pink Floral Dress',
        category: 'Dress',
        image: '/images/dress3.jpg',
        price: 220.00,
        countInStock: 0,
        rating: 4.8,
        numReviews: 17,
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur ipsum ab explicabo possimus, tenetur, veritatis quam porro vitae libero provident hic! Dolores error explicabo exercitationem facere adipisci est ipsa! Iure. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe qui dolore perferendis facere ad cumque id culpa quasi necessitatibus similique accusamus, dolorum animi excepturi sed! Cupiditate laboriosam voluptate nihil velit?',
      },
      {
       
        name: 'Polka Me Dress',
        category: 'Dress',
        image: '/images/dress4.jpg',
        price: 78.00,
        countInStock: 15,
        rating: 4.5,
        numReviews: 14,
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur ipsum ab explicabo possimus, tenetur, veritatis quam porro vitae libero provident hic! Dolores error explicabo exercitationem facere adipisci est ipsa! Iure. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe qui dolore perferendis facere ad cumque id culpa quasi necessitatibus similique accusamus, dolorum animi excepturi sed! Cupiditate laboriosam voluptate nihil velit?',
      },
      {
       
        name: 'Yellow Mellow Dress',
        category: 'Dress',
        image: '/images/dress5.jpg',
        price: 65.00,
        countInStock: 5,
        rating: 4.5,
        numReviews: 10,
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur ipsum ab explicabo possimus, tenetur, veritatis quam porro vitae libero provident hic! Dolores error explicabo exercitationem facere adipisci est ipsa! Iure. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe qui dolore perferendis facere ad cumque id culpa quasi necessitatibus similique accusamus, dolorum animi excepturi sed! Cupiditate laboriosam voluptate nihil velit?',
      },
      {
       
        name: 'Blue Blue Dress',
        category: 'Dress',
        image: '/images/dress6.jpg',
        price: 139.00,
        countInStock: 12,
        rating: 4.5,
        numReviews: 15,
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur ipsum ab explicabo possimus, tenetur, veritatis quam porro vitae libero provident hic! Dolores error explicabo exercitationem facere adipisci est ipsa! Iure. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe qui dolore perferendis facere ad cumque id culpa quasi necessitatibus similique accusamus, dolorum animi excepturi sed! Cupiditate laboriosam voluptate nihil velit?',
      },
      {
       
        name: 'White Chino Pants',
        category: 'Pants',
        image: '/images/p4.jpg',
        price: 150.00,
        countInStock: 8,
        rating: 3,
        numReviews: 19,
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur ipsum ab explicabo possimus, tenetur, veritatis quam porro vitae libero provident hic! Dolores error explicabo exercitationem facere adipisci est ipsa! Iure. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe qui dolore perferendis facere ad cumque id culpa quasi necessitatibus similique accusamus, dolorum animi excepturi sed! Cupiditate laboriosam voluptate nihil velit?',
      },
      {
        
        name: 'Olive Green Trousers',
        category: 'Pants',
        image: '/images/p5.jpg',
        price: 145.00,
        countInStock: 13,
        rating: 3.5,
        numReviews: 16,
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur ipsum ab explicabo possimus, tenetur, veritatis quam porro vitae libero provident hic! Dolores error explicabo exercitationem facere adipisci est ipsa! Iure. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe qui dolore perferendis facere ad cumque id culpa quasi necessitatibus similique accusamus, dolorum animi excepturi sed! Cupiditate laboriosam voluptate nihil velit?',
      },
      {
       
        name: 'Gray Trousers',
        category: 'Pants',
        image: '/images/p6.jpg',
        price: 165.00,
        countInStock: 11,
        rating: 4.5,
        numReviews: 12,
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur ipsum ab explicabo possimus, tenetur, veritatis quam porro vitae libero provident hic! Dolores error explicabo exercitationem facere adipisci est ipsa! Iure. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe qui dolore perferendis facere ad cumque id culpa quasi necessitatibus similique accusamus, dolorum animi excepturi sed! Cupiditate laboriosam voluptate nihil velit?',
      },
    ],
  };
  export default data;