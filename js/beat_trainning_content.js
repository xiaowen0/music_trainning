

var beat_trainning_content = new Vue({
    el : '#beat_trainning_content',
    data : {
        selectedList : ['beat_4', 'beat_8x2'],
        generatedBeatList : [],
        level : 1
    },
    methods : {
        onChangeLevel : function (e){

            this.selectedList = [];

            switch (parseInt(this.level)) {
                case 4 :
                    this.selectedList = this.selectedList.concat(['beat_8p_16', 'beat_16_8p']);
                case 3 :
                    this.selectedList = this.selectedList.concat(['beat_4rest', 'beat_8rest_8', 'beat_8_8rest']);
                case 2 :
                    this.selectedList = this.selectedList.concat(['beat_16x4', 'beat_8_16x2', 'beat_16x2_8', 'beat_8_16_8']);
                case 1 :
                    this.selectedList = this.selectedList.concat(['beat_4', 'beat_8x2']);
            }

            this.generate4Beat();
        },
        generate4Beat : function (){

            if (this.selectedList.length < 1)
            {
                return false;
            }

            this.generatedBeatList = [];

            for (var i=1; i<=4; i++)
            {
                var randomIndex = Math.floor(Math.random() * this.selectedList.length);
                var randomBeat = this.selectedList[randomIndex];

                this.generatedBeatList.push(randomBeat);
            }

            return true;
        }
    }
});
beat_trainning_content.generate4Beat();

