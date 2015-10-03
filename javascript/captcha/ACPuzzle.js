var ACPuzzleOptions;
var ACPuzzleInfo = {
    ckey:	    'Um1ChsG7KQJPtNwsE8ePXZ9JQj.8oUj4',
    protocol:       !window.location.protocol.match(/^https?:$/) ? 'http:' : '',
    apiserver:	    '//api.solvemedia.com',
    mediaserver:    '//api.solvemedia.com',
    magic:          'SuQ7Hgxswu97QKz3DGzC7w',
    chalapi:        'script',
    chalstamp:      1439822732,
    lang:           'en',
    size:           'standard',
    theme:          'white',
    type:	    'img',
    onload:	    function(){ ACPuzzle.script_init() };
    onresume:   function(){ ACPuzzle.script._main() }; 
};

document.write('<' + 'scr' + 'ipt type="text/javascript" s' + 'rc="' +
	(ACPuzzleInfo.protocol || '') + ACPuzzleInfo.apiserver + '/papi/_puzzle.js"><' + '/scr' + 'ipt' + '>');
