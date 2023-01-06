window.addEventListener('load', function() {
    var appScreen = this.document.getElementById('explore-app'),
        tagLine = this.document.getElementById('tag-line');

    this.window.addEventListener('scroll', function() {

        // var scrolled = (this.window.scrollY) / ( (docHeight - this.window.innerHeight) ) ,
        var scrolled = (this.scrollY / this.screen.height),
            appScreenScaleValue = scrolled  * 100 * 2 + 40,
            tagLineScaleValue = (this.document.height) / (this.scrollY * this.screen.height);

        
        // this.document.getElementById('identifier').innerHTML = value;
        if (appScreenScaleValue < 80) {
            appScreenScaleValue = 80;
        }

        if (this.screen.scrollY < 100) {

        } else if (0) {
            0
            // TODO  
        }

        // this.document.getElementById('identifier').innerHTML = this.document.documentElement.scrollHeight / (this.screen.height / this.scrollY);
        this.document.getElementById('identifier').innerHTML = (1 / (this.scrollY + 1));

        // appScreen.style.transform = 'scale( min(' + (appScreenScaleValue) + '%, 100%)';

        // tagLine.style.transform = 'scale(' + (tagLineScaleValue) + '%)'
        
        // box.style.width = 'min(' + (value) + 'vw, 100vw)';
        // box.style.fontSize = scrolled * 25 + 'px'
    }, false);
}, false)