import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Truck, Clock, MapPin, Phone, Calculator, Shield } from "lucide-react";
import { Link } from "react-router-dom";

const Delivery = () => {
  const deliveryZones = [
    {
      zone: "Центр города",
      time: "30-60 мин",
      price: "Бесплатно",
      minOrder: "от 1000₽",
      color: "bg-green-100 text-green-700"
    },
    {
      zone: "Ближние районы",
      time: "60-90 мин", 
      price: "150₽",
      minOrder: "от 800₽",
      color: "bg-blue-100 text-blue-700"
    },
    {
      zone: "Дальние районы",
      time: "90-120 мин",
      price: "250₽",
      minOrder: "от 1200₽",
      color: "bg-orange-100 text-orange-700"
    },
    {
      zone: "Пригород",
      time: "2-3 часа",
      price: "400₽",
      minOrder: "от 1500₽",
      color: "bg-purple-100 text-purple-700"
    }
  ];

  const deliveryFeatures = [
    {
      icon: Clock,
      title: "Точное время",
      description: "Доставляем строго в указанное время"
    },
    {
      icon: Shield,
      title: "Сохранность",
      description: "Специальная упаковка для транспортировки"
    },
    {
      icon: Phone,
      title: "Уведомления",
      description: "SMS и звонки о статусе доставки"
    },
    {
      icon: Calculator,
      title: "Точная стоимость",
      description: "Калькулятор доставки на сайте"
    }
  ];

  const workingHours = [
    { day: "Понедельник - Пятница", hours: "8:00 - 22:00" },
    { day: "Суббота - Воскресенье", hours: "9:00 - 21:00" },
    { day: "Праздничные дни", hours: "10:00 - 20:00" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-cyan-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Link to="/" className="text-orange-600 hover:text-orange-700">
                ← Назад
              </Link>
              <Truck className="h-6 w-6 text-blue-600" />
              <h1 className="text-2xl font-bold text-gray-800">Доставка</h1>
            </div>
            <Button asChild>
              <Link to="/cart">Оформить заказ</Link>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-12 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Быстрая доставка по всему городу
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Доставляем свежую выпечку прямо к вашему столу. Работаем ежедневно, 
            гарантируем сохранность и качество продукции.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {deliveryFeatures.map((feature, index) => (
              <div key={index} className="flex flex-col items-center p-6 bg-white rounded-lg shadow-sm">
                <feature.icon className="h-12 w-12 text-blue-600 mb-4" />
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-center text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Delivery Zones */}
      <section className="py-12 px-4">
        <div className="container mx-auto">
          <h3 className="text-3xl font-bold text-center mb-8 text-gray-800">
            Зоны доставки
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {deliveryZones.map((zone, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-200">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">{zone.zone}</CardTitle>
                    <Badge className={zone.color}>{zone.time}</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Стоимость:</span>
                      <span className="font-semibold">{zone.price}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Мин. заказ:</span>
                      <span className="font-semibold">{zone.minOrder}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Working Hours */}
      <section className="py-12 px-4 bg-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-gray-800">
                Время работы доставки
              </h3>
              <div className="space-y-4">
                {workingHours.map((schedule, index) => (
                  <Card key={index}>
                    <CardContent className="p-4">
                      <div className="flex justify-between items-center">
                        <span className="font-medium">{schedule.day}</span>
                        <Badge variant="outline">{schedule.hours}</Badge>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
              
              <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                <h4 className="font-semibold text-blue-800 mb-2">Важная информация:</h4>
                <ul className="text-sm text-blue-700 space-y-1">
                  <li>• Последний заказ принимается за час до закрытия</li>
                  <li>• В праздничные дни возможны изменения в расписании</li>
                  <li>• Экспресс-доставка доступна с 10:00 до 18:00</li>
                </ul>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-6 text-gray-800">
                Условия доставки
              </h3>
              
              <div className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center">
                      <MapPin className="h-5 w-5 mr-2 text-green-600" />
                      Бесплатная доставка
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">
                      При заказе от 1000₽ в центральные районы города. 
                      Доставка осуществляется в течение 30-60 минут.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center">
                      <Clock className="h-5 w-5 mr-2 text-blue-600" />
                      Экспресс-доставка
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">
                      Доставка в течение 30 минут за дополнительную плату 200₽. 
                      Доступна только в центральных районах.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center">
                      <Shield className="h-5 w-5 mr-2 text-purple-600" />
                      Гарантии качества
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">
                      Используем специальную упаковку для сохранения свежести. 
                      Если товар поврежден при доставке - заменим бесплатно.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Delivery Map */}
      <section className="py-12 px-4 bg-gray-50">
        <div className="container mx-auto">
          <h3 className="text-3xl font-bold text-center mb-8 text-gray-800">
            Карта доставки
          </h3>
          <div className="bg-white rounded-lg p-8 text-center">
            <div className="w-full h-64 bg-gray-200 rounded-lg flex items-center justify-center mb-6">
              <div className="text-center">
                <MapPin className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-500">Интерактивная карта зон доставки</p>
                <p className="text-sm text-gray-400">Здесь будет отображаться карта с зонами доставки</p>
              </div>
            </div>
            <Button>Проверить адрес доставки</Button>
          </div>
        </div>
      </section>

      {/* Contact for Delivery */}
      <section className="py-12 px-4 bg-blue-600 text-white">
        <div className="container mx-auto text-center">
          <h3 className="text-3xl font-bold mb-4">
            Вопросы по доставке?
          </h3>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Наши операторы помогут рассчитать стоимость и время доставки для вашего адреса
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary">
              <Phone className="h-5 w-5 mr-2" />
              +7 (495) 123-45-67
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-blue-600">
              Заказать обратный звонок
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Delivery;