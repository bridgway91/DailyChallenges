// You will create 2 string methods:
// isAudio/is_audio, matching 1 or + uppercase/lowercase letter(s) (combination possible), with the extension .mp3, .flac, .alac, or .aac.
// isImage/is_image, matching 1 or + uppercase/lowercase letter(s) (combination possible), with the extension .jpg, .jpeg, .png, .bmp, or .gif.

// Note that this is not a generic image/audio files checker. It's meant to be a test for Bill's files only. Bill doesn't like punctuation. He doesn't like numbers, neither. Thus, his filenames are letter-only

// Rules
// It should return true or false, simply.
// File extensions should consist of lowercase letters and numbers only.
// File names should consist of letters only (uppercase, lowercase, or both)

// Good luck!


String.prototype.isAudio= function(){ // easy enough, nearly same code for each.. wish tests mentioned whether they were testing audio or image, wouldve helped figuring out the need for 'accepted' options
    const accepted = ['mp3','flac','alac','aac']
    const filename = this.split('.')[0]
    const extension = this.split('.')[1]
    if(filename.match(/[^a-zA-Z]/gm)) return false
    if(extension.match(/[A-Z]/g)) return false
    return accepted.includes(extension)
  };
  String.prototype.isImage= function(){
    const accepted = ['jpg','jpeg','png','bmp','gif']
    const filename = this.split('.')[0]
    const extension = this.split('.')[1]
    if(filename.match(/[^a-zA-Z]/gm)) return false
    if(extension.match(/[A-Z]/g)) return false
    return accepted.includes(extension)
  };


// alternatively...

String.prototype.isAudio = function() { // fk me... i understand it too, and it seems simple enough, so im annoyed i didnt think to do it (granted ive never used .test() myself)
    return /^[a-zA-Z]+\.(mp3|flac|al?ac)$/.test(this)
  }
String.prototype.isImage = function() {
    return /^[a-zA-Z]+\.(jpe?g|png|bmp|gif)$/.test(this)
  }