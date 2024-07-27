// Question 2: Create a GET Method API
// Create a GET method API to List down the All Menu Items as per the schema we discussed ( /menu )

app.get('/', async(req,res)=>{
    try {
        const menuitems = await menuitem.find();
        res.json(menuitems);
    } catch (err) {
        console.error('Error creating menu item:', error);
        res.status(500).json({error: 'internal server error'});
    }
});