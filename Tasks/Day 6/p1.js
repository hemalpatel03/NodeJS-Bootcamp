// Question1:Create a parameterized GET Method API for the MenuItem on the Basis of
// taste Type via using Express Router. (/menu/:taste)

router.get('/:teste', async (req, res) => {
    try {
        const testeType = req.params.teste; // Extract the taste type from the URL parameter
        if (testeType == 'sweet', testeType == 'sour', testeType == 'spicy') {
            const response = await MenuItem.find({
                teste: testeType
            });
            console.log('response fetched');
            res.status(200).json(response);
        } else {
            res.status(404).json({
                error: 'invalid Teste type'
            });
        }

    } catch (err) {
        console.log(err);
        res.status(500).json({
            error: 'invaild server error'
        });
    }
});