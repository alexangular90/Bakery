import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Bread, 
  ShoppingCart, 
  Truck, 
  Clock, 
  Star, 
  Users, 
  Award, 
  Heart,
  Phone,
  MapPin,
  Menu,
  Coffee,
  Cake,
  Cookie,
  ChefHat,
  Gift,
  Calendar,
  CreditCard,
  User,
  Settings,
  FileText,
  HelpCircle,
  Mail
} from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  const navigationLinks = [
    { to: "/catalog", icon: Menu, label: "Каталог" },
    { to: "/bread", icon: Bread, label: "Хлеб" },
    { to: "/pastries", icon: Coffee, label: "Выпечка" },
    { to: "/cakes", icon: Cake, label: "Торты" },
    { to: "/cookies", icon: Cookie, label: "Печенье" },
    { to: "/custom-orders", icon: ChefHat, label: "На заказ" },
    { to: "/gifts", icon: Gift, label: "Подарки" },
    { to: "/events", icon: Calendar, label: "Мероприятия" },
    { to: "/cart", icon: ShoppingCart, label: "Корзина" },
    { to: "/delivery", icon: Truck, label: "Доставка" },
    { to: "/payment", icon: CreditCard, label: "Оплата" },
    { to: "/profile", icon: User, label: "Профиль" },
    { to: "/orders", icon: FileText, label: "Заказы" },
    { to: "/loyalty", icon: Star, label: "Бонусы" },
    { to: "/recipes", icon: ChefHat, label: "Рецепты" },
    { to: "/blog", icon: FileText, label: "Блог" },
    { to: "/about", icon: Users, label: "О нас" },
    { to: "/contacts", icon: Phone, label: "Контакты" },
    { to: "/help", icon: HelpCircle, label: "Помощь" },
    { to: "/settings", icon: Settings, label: "Настройки" }
  ];

  const infoSections = [
    {
      title: "Свежая выпечка каждый день",
      description: "Мы выпекаем хлеб и кондитерские изделия ежедневно с 4 утра, используя только натуральные ингредиенты",
      icon: Bread,
      color: "bg-orange-100 text-orange-600"
    },
    {
      title: "Быстрая доставка",
      description: "Доставляем свежую выпечку по всему городу в течение 2 часов после заказа",
      icon: Truck,
      color: "bg-blue-100 text-blue-600"
    },
    {
      title: "Работаем круглосуточно",
      description: "Наш интернет-магазин работает 24/7, а пекарня открыта с 6:00 до 22:00",
      icon: Clock,
      color: "bg-green-100 text-green-600"
    },
    {
      title: "Высокое качество",
      description: "Более 15 лет опыта в хлебопечении, сертифицированные продукты, контроль качества",
      icon: Award,
      color: "bg-purple-100 text-purple-600"
    },
    {
      title: "Довольные клиенты",
      description: "Более 10,000 постоянных клиентов доверяют нашему качеству и сервису",
      icon: Users,
      color: "bg-pink-100 text-pink-600"
    },
    {
      title: "Рейтинг 4.9/5",
      description: "Высокие оценки от наших клиентов на всех платформах отзывов",
      icon: Star,
      color: "bg-yellow-100 text-yellow-600"
    },
    {
      title: "Натуральные ингредиенты",
      description: "Используем только экологически чистые продукты от проверенных поставщиков",
      icon: Heart,
      color: "bg-red-100 text-red-600"
    },
    {
      title: "Индивидуальные заказы",
      description: "Изготавливаем торты и выпечку по индивидуальным заказам для особых событий",
      icon: ChefHat,
      color: "bg-indigo-100 text-indigo-600"
    },
    {
      title: "Удобные способы оплаты",
      description: "Принимаем наличные, карты, онлайн-платежи и бесконтактную оплату",
      icon: CreditCard,
      color: "bg-teal-100 text-teal-600"
    },
    {
      title: "Программа лояльности",
      description: "Накапливайте бонусы с каждой покупки и получайте скидки до 20%",
      icon: Gift,
      color: "bg-cyan-100 text-cyan-600"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-yellow-50">
      {/* Header */}
      <header className="bg-white shadow-lg sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Bread className="h-8 w-8 text-orange-600" />
              <h1 className="text-2xl font-bold text-gray-800">Пекарня "Золотой Колос"</h1>
            </div>
            <div className="flex items-center space-x-4">
              <Badge variant="secondary" className="bg-green-100 text-green-700">
                <Clock className="h-4 w-4 mr-1" />
                Открыто до 22:00
              </Badge>
              <Button asChild>
                <Link to="/cart">
                  <ShoppingCart className="h-4 w-4 mr-2" />
                  Корзина
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-5xl font-bold text-gray-800 mb-6">
            Свежая выпечка с доставкой на дом
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Откройте для себя мир ароматного хлеба, нежных пирожных и изысканных тортов. 
            Мы создаем каждое изделие с любовью и доставляем прямо к вашему столу.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" asChild>
              <Link to="/catalog">
                <Menu className="h-5 w-5 mr-2" />
                Посмотреть каталог
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link to="/delivery">
                <Truck className="h-5 w-5 mr-2" />
                Заказать доставку
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Navigation Links */}
      <section className="py-12 px-4 bg-white">
        <div className="container mx-auto">
          <h3 className="text-3xl font-bold text-center mb-8 text-gray-800">
            Разделы нашего сайта
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {navigationLinks.map((link, index) => (
              <Link
                key={index}
                to={link.to}
                className="flex flex-col items-center p-4 rounded-lg border-2 border-gray-200 hover:border-orange-300 hover:bg-orange-50 transition-all duration-200 group"
              >
                <link.icon className="h-8 w-8 text-gray-600 group-hover:text-orange-600 mb-2" />
                <span className="text-sm font-medium text-gray-700 group-hover:text-orange-700 text-center">
                  {link.label}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Information Sections */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h3 className="text-3xl font-bold text-center mb-12 text-gray-800">
            Почему выбирают нас
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {infoSections.map((section, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-200">
                <CardHeader>
                  <div className={`w-12 h-12 rounded-full ${section.color} flex items-center justify-center mb-4`}>
                    <section.icon className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-xl">{section.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600">
                    {section.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="py-12 px-4 bg-orange-100">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="text-center">
              <CardHeader>
                <Phone className="h-12 w-12 text-orange-600 mx-auto mb-4" />
                <CardTitle>Заказ по телефону</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold text-orange-600 mb-2">+7 (495) 123-45-67</p>
                <p className="text-gray-600">Принимаем заказы с 6:00 до 22:00</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <MapPin className="h-12 w-12 text-orange-600 mx-auto mb-4" />
                <CardTitle>Наш адрес</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="font-semibold mb-2">ул. Хлебная, д. 15</p>
                <p className="text-gray-600">Москва, метро Арбатская</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Mail className="h-12 w-12 text-orange-600 mx-auto mb-4" />
                <CardTitle>Напишите нам</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="font-semibold mb-2">info@kolos-bakery.ru</p>
                <p className="text-gray-600">Ответим в течение часа</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 px-4">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <Bread className="h-6 w-6 text-orange-400" />
            <span className="text-xl font-bold">Пекарня "Золотой Колос"</span>
          </div>
          <p className="text-gray-400 mb-4">
            © 2024 Пекарня "Золотой Колос". Все права защищены.
          </p>
          <div className="flex justify-center space-x-6">
            <Link to="/about" className="text-gray-400 hover:text-white">О нас</Link>
            <Link to="/contacts" className="text-gray-400 hover:text-white">Контакты</Link>
            <Link to="/help" className="text-gray-400 hover:text-white">Помощь</Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;