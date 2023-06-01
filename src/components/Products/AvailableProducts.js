import Card from "../UI/Card";
import classes from "./AvailableProducts.module.css";
import ProductItem from "./ProductItem/ProductItem";

const DUMMY_PRODUCTS = [
  {
    id: "m1",
    name: "아이스 카페 아메리카노",
    name_en: "Iced Caffe Americano",
    description:
      "진한 에스프레소에 시원한 정수물과 얼음을 더하여 스타벅스의 깔끔하고 강렬한 에스프레소를 가장 부드럽고 시원하게 즐길 수 있는 커피",
    price: 4500,
  },
  {
    id: "m2",
    name: "아이스 자몽 허니 블랙 티",
    name_en: "Iced Grapefruit Honey Black Tea",
    description:
      "새콤한 자몽과 달콤한 꿀이 깊고 그윽한 풍미의 스타벅스 티바나 블랙 티의 조화",
    price: 5700,
  },
  {
    id: "m3",
    name: "바닐라 크림 콜드 브루",
    name_en: "Vanilla Cream Cold Brew",
    description:
      "콜드 브루에 더해진 바닐라 크림으로 깔끔하면서 달콤한 콜드 브루를 새롭게 즐길 수 있는 음료",
    price: 5800,
  },
  {
    id: "m4",
    name: "자바 칩 프라푸치노",
    name_en: "Java Chip Frappuccino",
    description:
      "커피, 모카 소스, 진한 초콜릿 칩이 입안 가득 느껴지는 스타벅스에서만 맛볼 수 있는 프라푸치노",
    price: 6300,
  },
];

const AvailableProducts = () => {
  const productsList = DUMMY_PRODUCTS.map((product) => (
    <ProductItem
      id={product.id}
      name={product.name}
      name_en={product.name_en}
      description={product.description}
      price={product.price}
    />
  ));

  return (
    <section className={classes.products}>
      <Card>
        <ul>{productsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableProducts;
