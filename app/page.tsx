import { Navigation } from '@/components/navigation'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen gaming-bg-gradient">
      <Navigation />
      
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 gaming-text-glow text-primary">
            KanaKana
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-secondary">
            多彩電競風格遊戲官網
          </p>
          <p className="text-lg mb-12 text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            專為熱愛日本文化的學生打造，提供最優質有效的app及相關產品。
            新潮刺激的體驗，讓你在遊戲中學習日語，創新的學習方式等你來探索！
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="gaming-glow-green hover:gaming-glow-blue transition-all duration-300">
              立即開始體驗
            </Button>
            <Button size="lg" variant="outline" className="gaming-neon-border hover:bg-primary/10">
              了解更多
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-20">
        <h2 className="text-4xl font-bold text-center mb-16 text-primary gaming-text-glow">
          四大核心功能
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              title: '在地商家',
              description: '本地優質商家服務',
              href: '/local-merchant' as const,
              color: 'gaming-glow-green'
            },
            {
              title: '多商家市集',
              description: '精選商品一站購足',
              href: '/marketplace' as const,
              color: 'gaming-glow-blue'
            },
            {
              title: '新聞雜誌',
              description: '最新資訊搶先看',
              href: '/news' as const,
              color: 'gaming-glow-red'
            },
            {
              title: '活動網站',
              description: '精彩活動不錯過',
              href: '/events' as const,
              color: 'gaming-glow-green'
            }
          ].map((feature, index) => (
            <Link key={index} href={feature.href}>
              <Card className={`p-6 h-full hover:${feature.color} transition-all duration-300 cursor-pointer border-gaming-border bg-card`}>
                <h3 className="text-xl font-bold mb-4 text-foreground">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {[
            { number: '10K+', label: '活躍用戶' },
            { number: '50+', label: '合作商家' },
            { number: '99%', label: '用戶滿意度' }
          ].map((stat, index) => (
            <div key={index} className="p-8">
              <div className="text-5xl font-bold mb-4 text-primary gaming-text-glow">
                {stat.number}
              </div>
              <div className="text-lg text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl font-bold mb-6 text-primary gaming-text-glow">
            準備開始你的學習之旅？
          </h2>
          <p className="text-lg mb-8 text-muted-foreground">
            加入我們，體驗最創新的日語學習方式
          </p>
          <Button size="lg" className="gaming-glow-green hover:gaming-glow-blue transition-all duration-300">
            立即加入 KanaKana
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gaming-border py-12">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground">
            &copy; 2025 KanaKana. 專為日語學習者打造的創新平台。
          </p>
        </div>
      </footer>
    </div>
  )
}
