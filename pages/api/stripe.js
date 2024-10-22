import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
        const session = await stripe.checkout.sessions.create({
            submit_type : 'pay',
            mode: 'payment',
            payment_method_types : ['card'],
            billing_address_collection: 'auto',
            shipping_options: [
                {shipping_rate: 'shr_1Po359P0tmVfmhJDl58sFWsL'},
                {shipping_rate: 'shr_1Po348P0tmVfmhJDS60Ne3U3'},
            ],
            line_items: req.body.map((item) => {
                const img = item.image[0].asset._ref;
                const newImage = img.replace('image-', 'https://cdn.sanity.io/images/4n5ct0l0/production/').replace('-png', '.png');
                console.log('IMAGE', newImage);
                return {
                    price_data: { 
                    currency: 'eur',
                    product_data: { 
                        name: item.name,
                        images: [newImage],
                    },
                    unit_amount: item.price * 100,
                    },
                    adjustable_quantity: {
                      enabled:true,
                      minimum: 1,
                    },
                    quantity: item.quantity
                }
              }),
            success_url: `${req.headers.origin}/?success=true`,
            cancel_url: `${req.headers.origin}/?canceled=true`,
        });
        res.status(200).json(session);
        
        // DEPRECATED: res.redirect(303, session.url);

    } catch (err) {
      res.status(err.statusCode || 500).json(err.message);
    }
  } else {
    res.setHeader('Allow', 'POST');
    res.status(405).end('Method Not Allowed');
  }
}