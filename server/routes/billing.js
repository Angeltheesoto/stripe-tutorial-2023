const router = require("express").Router();
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

// ?Store item prices
var storeItems = {
  "65973e542916b94401cd546d": {
    price: 17.99,
  },
  "6597405f2916b94401cd546e": {
    price: 17.99,
  },
  "659740b52916b94401cd546f": {
    price: 17.99,
  },
  "659740cf2916b94401cd5470": {
    price: 17.99,
  },
  "659741162916b94401cd5471": {
    price: 17.99,
  },
  "659741352916b94401cd5472": {
    price: 17.99,
  },
};

/* 
Pass: 
{
    items: [{title, image, id, quantity, size}], 
    success_url, 
    cancel_url
}
*/
router.post("/create-checkout-session", async (req, res) => {
  try {
    const { items, success_url, cancel_url } = req.body;

    const line_items = items.map((item) => ({
      name: item.title,
      images: [item.image],
      price: storeItems[item.id].price,
      quantity: item.quantity,
      metadata: {
        size: item.size,
      },
    }));

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card", "cashapp"],
      mode: "payment",
      // billing_address_collection: "required",
      shipping_address_collection: {
        allowed_countries: ["US", "CA"],
      },
      line_items: line_items,
      success_url: success_url,
      cancel_url: cancel_url,
    });

    res.json({ url: session.url, sessionId: session.id });
  } catch (err) {
    console.log("Create checkout sesssion error:", err);
    res.status(500).json({ err: `Create checkout session error: ${err}` });
  }
});

module.exports = router;
