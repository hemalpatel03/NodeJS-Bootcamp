// Question 2:Create a PUT Method API to update the MenuItem Records. (menu/:id)

router.put('/:id', async(req, res)=>{
    try {
        const MenuId = req.params.id; // Extract the taste type from the URL parameter
        const updatedMenuData = req.body;
        const response = await MenuItem.findIdAndUpdate(MenuId, updatedMenuData,{
            new: true,
            runValidators: true,
        });
        if (!response) {
            return res.status(404).json({error: 'Menu Item not Found'});
        }
        console.log('data Updated');
        res.status(200).json(response);
    } catch (err) {
        console.log(err);
        res.status(500).json({error: 'invaild server error'});
    }
});