import Container from "../ui/Container";
import Heading from "../ui/Heading";

const categories = [
  {
    id: 1,
    title: "Dairy",
    description:
      "Creamy milk, rich butter, cheese & more – farm-fresh dairy essentials for every home.",
    img: "../assets/dairy-and-eggs.png",
  },
  {
    id: 2,
    title: "Fruits",
    description:
      "Handpicked seasonal fruits packed with freshness, sweetness, and natural goodness.",
    img: "../assets/fruits-and-veggies.png",
  },
  {
    id: 3,
    title: "Vegetables",
    description:
      "Crisp, colorful, and organic vegetables – straight from the farm to your kitchen.",
    img: "../assets/meat-and-seafood.png",
  },
];

const Category = () => {
  return (
    <Container>
      <div className="text-center">
        {/* Bigger heading */}
        <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight my-12">
          <span className="text-[var(--color-primary)]">Shop</span> by Category
        </h2>

        {/* Categories grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 mt-10 place-items-center">
          {categories.map((cat) => (
            <div
              key={cat.id}
              className="group bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-10 flex flex-col items-center text-center cursor-pointer border border-gray-100 hover:border-[var(--color-primary)] w-72"
            >
              <div className="w-60 h-60 flex items-center justify-center rounded-full bg-[var(--color-secondary)]/10 group-hover:bg-[var(--color-secondary)]/20 transition">
                <img
                  src={cat.img}
                  alt={cat.title}
                  className="w-52 h-52 object-contain"
                />
              </div>

              <h3 className="text-2xl font-semibold mt-6 text-gray-800 group-hover:text-[var(--color-primary)] transition">
                {cat.title}
              </h3>
              <p className="text-base text-gray-500 mt-2">{cat.description}</p>

              {/* Fancy underline animation */}
              <div className="w-0 h-1 bg-[var(--color-primary)] mt-4 rounded-full transition-all duration-300 group-hover:w-24"></div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default Category;
