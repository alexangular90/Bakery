import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ShoppingCart, Search, Filter, Star, Heart } from "lucide-react";
import { Link } from "react-router-dom";

const Catalog = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("popular");

  const products = [
    {
      id: 1,
      name: "Хлеб бородинский",
      price: 85,
      category: "bread",
      image: "https://images.pexels.com/photos/1775043/pexels-photo-1775043.jpeg?auto=compress&cs=tinysrgb&w=400",
      rating: 4.8,
      description: "Традиционный русский хлеб с кориандром",
      weight: "500г",
      isNew: false,
      isPopular: true
    },
    {
      id: 2,
      name: "Круассан с шоколадом",
      price: 120,
      category: "pastries",
      image: "https://images.pexels.com/photos/2135/food-france-morning-breakfast.jpg?auto=compress&cs=tinysrgb&w=400",
      rating: 4.9,
      description: "Слоеный круассан с бельгийским шоколадом",
      weight: "80г",
      isNew: true,
      isPopular: true
    },
    {
      id: 3,
      name: "Торт Наполеон",
      price: 1200,
      category: "cakes",
      image: "https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg?auto=compress&cs=tinysrgb&w=400",
      rating: 4.7,
      description: "Классический торт с заварным кремом",
      weight: "1кг",
      isNew: false,
      isPopular: true
    },
    {
      id: 4,
      name: "Печенье овсяное",
      price: 180,
      category: "cookies",
      image: "https://images.pexels.com/photos/230325/pexels-photo-230325.jpeg?auto=compress&cs=tinysrgb&w=400",
      rating: 4.6,
      description: "Домашнее овсяное печенье с изюмом",
      weight: "300г",
      isNew: false,
      isPopular: false
    },
    {
      id: 5,
      name: "Багет французский",
      price: 95,
      category: "bread",
      image: "https://images.pexels.com/photos/209206/pexels-photo-209206.jpeg?auto=compress&cs=tinysrgb&w=400",
      rating: 4.5,
      description: "Хрустящий французский багет",
      weight: "400г",
      isNew: false,
      isPopular: false
    },
    {
      id: 6,
      name: "Эклер с кремом",
      price: 95,
      category: "pastries",
      image: "https://images.pexels.com/photos/1126359/pexels-photo-1126359.jpeg?auto=compress&cs=tinysrgb&w=400",
      rating: 4.8,
      description: "Воздушный эклер с ванильным кремом",
      weight: "70г",
      isNew: true,
      isPopular: false
    }
  ];

  const categories = [
    { id: "all", name: "Все товары", count: products.length },
    { id: "bread", name: "Хлеб", count: products.filter(p => p.category === "bread").length },
    { id: "pastries", name: "Выпечка", count: products.filter(p => p.category === "pastries").length },
    { id: "cakes", name: "Торты", count: products.filter(p => p.category === "cakes").length },
    { id: "cookies", name: "Печенье", count: products.filter(p => p.category === "cookies").length }
  ];

  const filteredProducts = products.filter(product => 
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="text-2xl font-bold text-orange-600">
              Каталог товаров
            </Link>
            <Button asChild>
              <Link to="/cart">
                <ShoppingCart className="h-4 w-4 mr-2" />
                Корзина
              </Link>
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Search and Filters */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                placeholder="Поиск товаров..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-full md:w-48">
                <Filter className="h-4 w-4 mr-2" />
                <SelectValue placeholder="Сортировка" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="popular">По популярности</SelectItem>
                <SelectItem value="price-asc">По цене (возр.)</SelectItem>
                <SelectItem value="price-desc">По цене (убыв.)</SelectItem>
                <SelectItem value="rating">По рейтингу</SelectItem>
                <SelectItem value="name">По названию</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Category Tabs */}
          <Tabs defaultValue="all" className="w-full">
            <TabsList className="grid w-full grid-cols-5">
              {categories.map(category => (
                <TabsTrigger key={category.id} value={category.id} className="text-sm">
                  {category.name} ({category.count})
                </TabsTrigger>
              ))}
            </TabsList>

            <TabsContent value="all" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredProducts.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </TabsContent>

            {categories.slice(1).map(category => (
              <TabsContent key={category.id} value={category.id} className="mt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {filteredProducts
                    .filter(product => product.category === category.id)
                    .map(product => (
                      <ProductCard key={product.id} product={product} />
                    ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </div>
  );
};

const ProductCard = ({ product }: { product: any }) => {
  return (
    <Card className="group hover:shadow-lg transition-all duration-200 overflow-hidden">
      <div className="relative">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-200"
        />
        <div className="absolute top-2 left-2 flex gap-2">
          {product.isNew && (
            <Badge className="bg-green-500 hover:bg-green-600">Новинка</Badge>
          )}
          {product.isPopular && (
            <Badge className="bg-orange-500 hover:bg-orange-600">Хит</Badge>
          )}
        </div>
        <Button
          size="sm"
          variant="secondary"
          className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity"
        >
          <Heart className="h-4 w-4" />
        </Button>
      </div>
      
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg">{product.name}</CardTitle>
          <div className="flex items-center">
            <Star className="h-4 w-4 text-yellow-400 fill-current" />
            <span className="text-sm text-gray-600 ml-1">{product.rating}</span>
          </div>
        </div>
        <CardDescription>{product.description}</CardDescription>
      </CardHeader>
      
      <CardContent>
        <div className="flex items-center justify-between mb-4">
          <div>
            <span className="text-2xl font-bold text-orange-600">{product.price}₽</span>
            <span className="text-sm text-gray-500 ml-2">{product.weight}</span>
          </div>
        </div>
        
        <div className="flex gap-2">
          <Button className="flex-1">
            <ShoppingCart className="h-4 w-4 mr-2" />
            В корзину
          </Button>
          <Button variant="outline" size="sm">
            Подробнее
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default Catalog;