branch.link({
    channel: 'sms',
    feature: 'share',
    data: {
        'article_id': '1234',
        '$desktop_url': 'https://mysite.com',
        '$og_title': 'Check out this article!',
    }
}, function (err, link) {
    console.log(err, link);
});