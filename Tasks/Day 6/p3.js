// Question 3: Create a DELETE Method API to delete the MenuItem Records. (menu/:id)

router.delete('/:id', async(req, res)=>{
    try {
        const menuId  = req.params.id;
        const response = await MenuItem.findByIdAndDelete(menuId);
        if (!response) {
            return res.status(404).json({error: 'Menu Item is not found'});
        }
        console.log('data deleted');
        res.status(200).json({message: 'Menu deleted successfully'});
    } catch (err) {
        console.log(err);
        res.status(500).json({error: 'invalid server error'});
    }
});