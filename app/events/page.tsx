import type { Metadata } from 'next'
import { Navigation } from '@/components/navigation'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ContactForm } from '@/components/forms/ContactForm'

export const metadata: Metadata = {
  title: '活動網站 - KanaKana',
  description: '精彩日語學習活動、電競賽事、文化交流活動，與同好一起成長',
}

export default function EventsPage() {
  const eventStats = [
    { number: '50+', label: '舉辦活動' },
    { number: '5000+', label: '參與人次' },
    { number: '98%', label: '滿意度' },
    { number: '100+', label: '合作夥伴' }
  ]

  const eventFeatures = [
    {
      title: '專業師資',
      description: '業界頂尖的日語教師和電競專家',
      icon: '👨‍🏫'
    },
    {
      title: '互動體驗',
      description: '豐富的互動環節和實戰練習',
      icon: '🎮'
    },
    {
      title: '網路直播',
      description: '線上線下同步，隨時隨地參與',
      icon: '📺'
    },
    {
      title: '證書認證',
      description: '完成活動獲得官方認證證書',
      icon: '🏆'
    }
  ]

  const speakers = [
    {
      name: '田中老師',
      title: 'N1認證專家',
      speciality: 'JLPT考試指導',
      experience: '15年教學經驗',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face'
    },
    {
      name: '山田教授',
      title: '文化研究學者',
      speciality: '日本文化深度解析',
      experience: '京都大學博士',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face'
    },
    {
      name: 'Gaming Pro',
      title: '電競選手',
      speciality: '遊戲日語實戰',
      experience: '職業電競5年',
      image: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=300&h=300&fit=crop&crop=face'
    },
    {
      name: '櫻花老師',
      title: '口語專家',
      speciality: '日語會話訓練',
      experience: '東京留學背景',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b790?w=300&h=300&fit=crop&crop=face'
    }
  ]

  const pricingPlans = [
    {
      name: '基礎票',
      price: 'NT$ 299',
      duration: '單日票',
      features: [
        '參加所有講座',
        '活動資料包',
        '線上重播權限',
        '基礎證書'
      ],
      popular: false,
      color: 'gaming-glow-green'
    },
    {
      name: '進階票',
      price: 'NT$ 499',
      duration: '兩日票',
      features: [
        '所有基礎票內容',
        '專家一對一諮詢',
        '獨家學習資源',
        '進階證書',
        '專屬交流群'
      ],
      popular: true,
      color: 'gaming-glow-blue'
    },
    {
      name: '尊享票',
      price: 'NT$ 799',
      duration: '全程票',
      features: [
        '所有進階票內容',
        'VIP座位',
        '講師私人聚餐',
        '定制學習計劃',
        '一年免費諮詢'
      ],
      popular: false,
      color: 'gaming-glow-red'
    }
  ]

  return (
    <div className="min-h-screen gaming-bg-gradient">
      <Navigation />
      
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 gaming-text-glow text-primary">
            活動網站
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-secondary">
            精彩活動 • 專業學習 • 同好交流
          </p>
          <p className="text-lg mb-12 text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            參加我們的專業活動，與頂尖師資面對面交流，與同好一起成長學習。
            從基礎入門到高階應用，總有適合您的精彩內容。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="gaming-glow-green hover:gaming-glow-blue transition-all duration-300">
              立即報名
            </Button>
            <Button size="lg" variant="outline" className="gaming-neon-border hover:bg-primary/10">
              查看活動詳情
            </Button>
          </div>
        </div>
      </section>

      {/* Event Stats */}
      <section className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {eventStats.map((stat, index) => (
            <div key={index} className="p-6">
              <div className="text-4xl md:text-5xl font-bold mb-4 text-primary gaming-text-glow">
                {stat.number}
              </div>
              <div className="text-lg text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Event Features */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-primary gaming-text-glow">
            活動亮點
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {eventFeatures.map((feature, index) => (
              <Card key={index} className="p-8 text-center gaming-neon-border bg-card hover:gaming-glow-green transition-all duration-300">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-4 text-foreground">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Speakers Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-primary gaming-text-glow">
            講者介紹
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {speakers.map((speaker, index) => (
              <Card key={index} className="overflow-hidden gaming-neon-border bg-card hover:gaming-glow-blue transition-all duration-300">
                <div className="aspect-square bg-muted flex items-center justify-center">
                  <img 
                    src={speaker.image} 
                    alt={speaker.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold mb-2 text-foreground">{speaker.name}</h3>
                  <Badge variant="secondary" className="bg-primary text-primary-foreground mb-3">
                    {speaker.title}
                  </Badge>
                  <p className="text-muted-foreground mb-2 text-sm">
                    專長：{speaker.speciality}
                  </p>
                  <p className="text-muted-foreground text-sm">
                    {speaker.experience}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-primary gaming-text-glow">
            票價方案
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <Card key={index} className={`p-8 text-center gaming-neon-border bg-card hover:${plan.color} transition-all duration-300 relative`}>
                {plan.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-accent text-accent-foreground">
                    最受歡迎
                  </Badge>
                )}
                <h3 className="text-2xl font-bold mb-4 text-foreground">{plan.name}</h3>
                <div className="text-4xl font-bold mb-2 text-primary gaming-text-glow">
                  {plan.price}
                </div>
                <p className="text-muted-foreground mb-6">{plan.duration}</p>
                <div className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center justify-center text-muted-foreground">
                      <span className="text-primary mr-2">✓</span>
                      {feature}
                    </div>
                  ))}
                </div>
                <Button 
                  className={`w-full ${plan.popular ? 'gaming-glow-blue' : 'gaming-glow-green'} hover:gaming-glow-blue transition-all duration-300`}
                >
                  {plan.popular ? '立即搶購' : '選擇方案'}
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-primary gaming-text-glow">
            即將舉辦
          </h2>
          <div className="space-y-6">
            {[
              {
                title: 'KanaKana 日語電競大會 2025',
                date: '2025-03-15',
                time: '09:00 - 18:00',
                location: '台北國際會議中心',
                status: '報名中',
                attendees: 500
              },
              {
                title: 'N1衝刺班 - 春季密集班',
                date: '2025-02-20',
                time: '10:00 - 16:00',
                location: '線上 + 實體',
                status: '即將開放',
                attendees: 100
              },
              {
                title: '日本文化體驗工作坊',
                date: '2025-02-10',
                time: '14:00 - 17:00',
                location: '台北市日本文化中心',
                status: '報名中',
                attendees: 50
              }
            ].map((event, index) => (
              <Card key={index} className="p-6 gaming-neon-border bg-card hover:gaming-glow-red transition-all duration-300">
                <div className="flex flex-col md:flex-row md:items-center justify-between">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2 text-foreground">{event.title}</h3>
                    <div className="space-y-1 text-muted-foreground">
                      <p>📅 {event.date} {event.time}</p>
                      <p>📍 {event.location}</p>
                      <p>👥 預計參與人數：{event.attendees}人</p>
                    </div>
                  </div>
                  <div className="mt-4 md:mt-0 md:ml-6 text-center">
                    <Badge 
                      variant={event.status === '報名中' ? 'default' : 'secondary'} 
                      className={`mb-3 ${event.status === '報名中' ? 'bg-primary text-primary-foreground' : ''}`}
                    >
                      {event.status}
                    </Badge>
                    <div>
                      <Button 
                        className="gaming-glow-green hover:gaming-glow-blue transition-all duration-300"
                        disabled={event.status !== '報名中'}
                      >
                        {event.status === '報名中' ? '立即報名' : '敬請期待'}
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-primary gaming-text-glow">
            聯絡我們
          </h2>
          <div className="text-center mb-8">
            <p className="text-lg text-muted-foreground">
              對活動有任何疑問？想要定制專屬活動？歡迎與我們聯絡！
            </p>
          </div>
          <Card className="p-8 bg-card border-gaming-border">
            <ContactForm />
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gaming-border py-12">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground">
            &copy; 2025 KanaKana 活動網站. 精彩活動，不容錯過。
          </p>
        </div>
      </footer>
    </div>
  )
}