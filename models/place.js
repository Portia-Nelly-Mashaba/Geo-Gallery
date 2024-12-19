class Place {
    constructor(title, imageUri, address, loaction) {
        this.title = title;
        this.imageUri = imageUri;
        this.address = address;
        this.loaction = loaction; //{lat: 0.141241, lng: 127.121}
        this.id = new Date().toString() + Math.random().toString()
    }
}