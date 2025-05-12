export default async function handler(req, res) {
    const { from, to, amount } = req.query;

    if (!from || !to || !amount) {
        return res.status(400).json({ error: "Missing required parameters" });
    }

    try {
        const API_KEY = process.env.EXCHANGE_API_KEY;
        const url = `https://v6.exchangerate-api.com/v6/${API_KEY}/latest/${from.toUpperCase()}`;

        const response = await fetch(url);
        const data = await response.json();

        if (data.result !== "success") {
            return res.status(500).json({ error: "Failed to fetch exchange rates" });
        }

        const rate = data.conversion_rates[to.toUpperCase()];
        if (!rate) {
            return res.status(400).json({ error: "Invalid currency code" });
        }

        const convertedAmount = (parseFloat(amount) * rate).toFixed(2);

        res.status(200).json({
            from,
            to,
            amount,
            convertedAmount,
            rate,
        });
    } catch (error) {
        res.status(500).json({ error: "Internal server error" });
    }
}
