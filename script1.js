const Habit = require('../models/Habit');

router.post('/habits', authenticateJWT, async (req, res) => {
    const { name } = req.body;
    const habit = new Habit({ name, user: req.user._id });
    await habit.save();
    res.status(201).json(habit);
});
