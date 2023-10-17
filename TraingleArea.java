class TraingleArea {
    float side ;
    float height ;
    void setValues(int a,int b){
        side = a;
        height = b;
    }
    float traingleArea () {
        float Area = (float) 1/2 * height * side;
        return Area;
    }

    public static void main (String[] args) {
        TraingleArea obj = new TraingleArea();
        obj.setValues(3, 5);
        float result = obj.traingleArea();
        System.out.println("Area of Traingle is " + result);
    }
}