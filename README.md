This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

<h1>Modern Full Stack ECommerce Application with Stripe & Sanity</h1>
👉 Check out for Live Website: <a href="https://ecommerce-psi-six-78.vercel.app/">E-commerce App</a>

<h2>Project Summary</h2>
<p>ECommerce Application which uses <strong>React, Next.Js, Stripe & Sanity</strong> - from start to finish. </p>
<p>Sanity is used as a Content Management Cloud for this project. Database, and content management handled by Sanity.</p>
<p>Stripe is used as Payment Management for this project.</p>

<h2>Project Features</h2>
<ul>
<li><strong>Products layout page:</strong> Header and footer with highlighted sale product.</li>
<li><strong>Product detail page:</strong> Users can see the price and product's details. Additionally, alternative similar product recommendations can be accessed by navigating to related products.</li>
<li><strong>Sidebar cart:</strong> Show and calculate all products in the cart and navigate to the payment page.</li>
<li><strong>Payment Page with Stripe:</strong> Product, shipment, total and payment details.   </li>
</ul>

<h2>Look at Project</h2>
<img width="1677" alt="ProjectView1" src="https://github.com/user-attachments/assets/b8179cf4-5b0c-41cc-a152-c39c1da4bdc8">
<img width="1677" alt="ProjectView2" src="https://github.com/user-attachments/assets/967804fa-01e4-4898-ad08-c34b8d0839f2">


<h2>Installation</h2>
<ol>
<li><strong>Clone the repository:</strong></li>
  
```
git clone https://github.com/FCimendere/ecommerce.git
cd ecommerce
```

<li><strong>Install dependencies:</strong></li>
  
```
npm install
```
<li><strong>Configure environment variables:</strong> Create a .env file in the root directory and add your environment variables.</li>

```
NEXT_PUBLIC_SANITY_PROJECT_ID = your_sanity_project_id
NEXT_PUBLIC_SANITY_DATASET = your_sanity_dataset
SANITY_SECRET_TOKEN = your_sanity_secret_token
STRIPE_SECRET_KEY = your_stripe_secret_key
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY = your_stripe_publisable_key
```
<li><strong>Run the application:</strong> Runs the app in the development mode.
Open http://localhost:3000 to view it in your browser.</li>

```
npm start
```

<li><strong>Run the Backend- Sanity:</strong> Runs the app in the development mode.
Open http://localhost:3333 to view it in your browser.</li>

```
sanity start
```

</ol>


<p> Happy Surfing 🌟 </p>

