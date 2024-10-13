interface Product {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

class Inventory {
  private products: Product[] = [];

  addProduct(product: Product): void {
    this.products.push(product);
  }

  updateStock(id: number, newQuantity: number): void {
    const product = this.products.find((p) => p.id === id);
    if (product) {
      product.quantity = newQuantity;
    } else {
      console.log(`Producto con ID ${id} no encontrado.`);
    }
  }

  getTotalValue(): number {
    return this.products.reduce((total, product) => {
      return total + product.price * product.quantity;
    }, 0);
  }

  getLowStockProducts(threshold: number): Product[] {
    return this.products.filter((product) => product.quantity < threshold);
  }
}
