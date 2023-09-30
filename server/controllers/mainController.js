/**
 * get
 * homepage
 */

exports.homepage = async (req, res) => {
    const locals = {
        title: 'ENotes',
        description: 'Free ENotes For Evreyone',
    };

    res.render('index', {
        locals,
        layout: '../views/layouts/front-page'
    });
};


/**
 * get
 * about
 */

exports.about = async (req, res) => {
    const locals = {
        title: 'About - ENotes',
        description: 'Free ENotes For Evreyone',
    };

    res.render('about', locals);
};