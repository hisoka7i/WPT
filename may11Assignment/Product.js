class Product{
  constructor(pname, brand){
    this.product_name = pname;
    this.product_brand = brand;
  }
  show(){
    console.log(this.product_name,this.product_brand);
  }
}
export default Product;
