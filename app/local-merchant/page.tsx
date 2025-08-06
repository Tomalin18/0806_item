import type { Metadata } from 'next'
import { Navigation } from '@/components/navigation'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { ContactForm } from '@/components/forms/ContactForm'

export const metadata: Metadata = {
  title: '在地商家 - KanaKana',
  description: '專業的在地商家服務，提供最優質的本地商家解決方案',
}

export default function LocalMerchantPage() {
  const features = [
    {
      title: '專業服務',
      description: '提供專業的商家諮詢和技術支援服務',
      icon: '🏪'
    },
    {
      title: '在地深耕',
      description: '深入了解當地市場，提供量身定制的解決方案',
      icon: '🌱'
    },
    {
      title: '全方位支援',
      description: '從開店到營運，提供一站式的商家服務支援',
      icon: '🛠️'
    },
    {
      title: '數位轉型',
      description: '協助傳統商家進行數位化升級轉型',
      icon: '💻'
    }
  ]

  return (
    <div className="min-h-screen gaming-bg-gradient">
      <Navigation />
      
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 gaming-text-glow text-primary">
            在地商家服務
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-secondary">
            專業 • 在地 • 創新
          </p>
          <p className="text-lg mb-12 text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            我們致力於為在地商家提供最專業的服務支援，從傳統商業模式到數位化轉型，
            陪伴每一位商家成長茁壯，在競爭激烈的市場中脫穎而出。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="gaming-glow-green hover:gaming-glow-blue transition-all duration-300">
              立即諮詢服務
            </Button>
            <Button size="lg" variant="outline" className="gaming-neon-border hover:bg-primary/10">
              查看成功案例
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-primary gaming-text-glow">
            服務特色
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="p-8 text-center gaming-neon-border bg-card hover:gaming-glow-green transition-all duration-300">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-4 text-foreground">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-primary gaming-text-glow">
            成功案例
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: '台北咖啡店',
                description: '協助傳統咖啡店數位化轉型，營業額提升 150%',
                result: '+150% 營業額'
              },
              {
                title: '台中書店',
                description: '整合線上線下服務，客戶滿意度大幅提升',
                result: '客戶滿意度 98%'
              },
              {
                title: '高雄餐廳',
                description: '導入智慧點餐系統，運營效率顯著提升',
                result: '+80% 效率提升'
              }
            ].map((story, index) => (
              <Card key={index} className="p-6 bg-card border-gaming-border hover:gaming-glow-blue transition-all duration-300">
                <h3 className="text-xl font-bold mb-4 text-foreground">{story.title}</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">{story.description}</p>
                <div className="text-lg font-bold text-accent gaming-text-glow">{story.result}</div>
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
          <Card className="p-8 bg-card border-gaming-border">
            <ContactForm />
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gaming-border py-12">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground">
            &copy; 2025 KanaKana 在地商家服務. 專業服務，值得信賴。
          </p>
        </div>
      </footer>
    </div>
  )
}