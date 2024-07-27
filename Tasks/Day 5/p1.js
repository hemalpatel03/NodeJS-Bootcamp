// Question 1: Create a POST Method API
//  Create a POST method API to store data or menu items as per the schema we discussed ( /menu )

app.post('/', async(req,res)=>{
    try {
        const munuitemdata = req.body;
        const menuitem = new menuitem(munuitemdata);
        const menu_item = await menuitem.save();

        console.log('menu item saved');
        res.status(200).json(menu_item);
    } catch (error) {
        console.error('Error creating menu item:', error);
        res.status(500).json({error: 'internal server error'});
    }
});