import type { Metadata } from 'next'
import { Navigation } from '@/components/navigation'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import Link from 'next/link'

export const metadata: Metadata = {
  title: '新聞雜誌 - KanaKana',
  description: '最新日語學習資訊、遊戲攻略、文化趨勢，掌握第一手消息',
}

export default function NewsPage() {
  const featuredNews = {
    title: '2025年日語學習新趋势：AI輔助學習革命',
    excerpt: 'AI技術如何改變傳統日語學習方式，讓學習更個性化、更高效。專家分析最新趨勢...',
    category: '學習趨勢',
    publishDate: '2025-01-15',
    readTime: '5分鐘',
    image: 'https://images.unsplash.com/photo-1607706009771-de8808640bcf?w=800&h=400&fit=crop'
  }

  const newsCategories = [
    { name: '學習攻略', count: 25, color: 'text-primary' },
    { name: '文化趨勢', count: 18, color: 'text-secondary' },
    { name: '遊戲新聞', count: 32, color: 'text-accent' },
    { name: '產品評測', count: 15, color: 'text-primary' }
  ]

  const latestNews = [
    {
      id: 1,
      title: '新版日語學習App正式上線！功能全面升級',
      excerpt: '全新介面設計、AI語音識別、個性化學習路徑，打造最佳學習體驗...',
      category: '產品更新',
      publishDate: '2025-01-12',
      readTime: '3分鐘',
      featured: false
    },
    {
      id: 2,
      title: '電競選手都在用！最受歡迎的日語遊戲推薦',
      excerpt: '盤點2025年最熱門的日語遊戲，邊玩邊學效果驚人...',
      category: '遊戲推薦',
      publishDate: '2025-01-10',
      readTime: '7分鐘',
      featured: false
    },
    {
      id: 3,
      title: '日本文化節慶指南：春季必知的傳統節日',
      excerpt: '從櫻花季到黃金週，了解日本春季重要節慶的文化意義...',
      category: '文化知識',
      publishDate: '2025-01-08',
      readTime: '6分鐘',
      featured: true
    },
    {
      id: 4,
      title: '零基礎到N1：成功學員的學習心得分享',
      excerpt: '聽聽學員們如何在一年內從零基礎達到N1水準的真實經驗...',
      category: '學習心得',
      publishDate: '2025-01-05',
      readTime: '8分鐘',
      featured: true
    },
    {
      id: 5,
      title: '2025年JLPT考試重要變化及準備建議',
      excerpt: '官方發布最新考試調整，專業老師提供備考策略...',
      category: '考試資訊',
      publishDate: '2025-01-03',
      readTime: '4分鐘',
      featured: false
    },
    {
      id: 6,
      title: '動漫中的日語：從《鬼滅之刃》學習日常會話',
      excerpt: '分析熱門動漫台詞，學習實用的日常對話表達...',
      category: '動漫日語',
      publishDate: '2025-01-01',
      readTime: '5分鐘',
      featured: true
    }
  ]

  return (
    <div className="min-h-screen gaming-bg-gradient">
      <Navigation />
      
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 gaming-text-glow text-primary">
            新聞雜誌
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-secondary">
            最新資訊 • 深度分析 • 專業觀點
          </p>
          <p className="text-lg mb-12 text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            掌握日語學習最新趨勢，獲取第一手遊戲資訊，深入了解日本文化。
            我們為您精選最有價值的內容，助您在學習路上更進一步。
          </p>
        </div>
      </section>

      {/* Featured News */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-primary gaming-text-glow">
            頭條新聞
          </h2>
          <Card className="overflow-hidden gaming-neon-border bg-card hover:gaming-glow-green transition-all duration-300">
            <div className="md:flex">
              <div className="md:w-1/2">
                <div className="aspect-video bg-muted flex items-center justify-center">
                  <img 
                    src={featuredNews.image} 
                    alt={featuredNews.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="md:w-1/2 p-8">
                <div className="flex items-center gap-4 mb-4">
                  <Badge variant="secondary" className="bg-primary text-primary-foreground">
                    {featuredNews.category}
                  </Badge>
                  <Badge variant="outline" className="text-accent border-accent">
                    頭條
                  </Badge>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-foreground leading-tight">
                  {featuredNews.title}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {featuredNews.excerpt}
                </p>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-sm text-muted-foreground">
                    {featuredNews.publishDate}
                  </span>
                  <span className="text-sm text-muted-foreground">
                    閱讀時間：{featuredNews.readTime}
                  </span>
                </div>
                <Button className="gaming-glow-green hover:gaming-glow-blue transition-all duration-300">
                  閱讀全文
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Latest News */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-primary gaming-text-glow">
            最新報導
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {latestNews.map((article) => (
              <Card key={article.id} className="overflow-hidden gaming-neon-border bg-card hover:gaming-glow-blue transition-all duration-300">
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <Badge variant="outline" className="text-secondary border-secondary">
                      {article.category}
                    </Badge>
                    {article.featured && (
                      <Badge variant="outline" className="text-accent border-accent">
                        精選
                      </Badge>
                    )}
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-foreground leading-tight">
                    {article.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed text-sm">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                    <span>{article.publishDate}</span>
                    <span>閱讀時間：{article.readTime}</span>
                  </div>
                  <Button variant="outline" className="w-full gaming-neon-border hover:bg-primary/10">
                    繼續閱讀
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* News Categories */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-primary gaming-text-glow">
            新聞分類
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {newsCategories.map((category, index) => (
              <Card key={index} className="p-8 text-center gaming-neon-border bg-card hover:gaming-glow-red transition-all duration-300 cursor-pointer">
                <h3 className={`text-xl font-bold mb-2 ${category.color} gaming-text-glow`}>
                  {category.name}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {category.count} 篇文章
                </p>
                <Button variant="outline" size="sm" className="gaming-neon-border">
                  查看更多
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Subscription */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6 text-primary gaming-text-glow">
            訂閱新聞快報
          </h2>
          <p className="text-lg mb-8 text-muted-foreground">
            第一時間獲取最新資訊和獨家內容
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="請輸入您的Email"
              className="flex-1 px-4 py-3 bg-card border border-gaming-border rounded-md text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <Button className="gaming-glow-green hover:gaming-glow-blue transition-all duration-300">
              立即訂閱
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gaming-border py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4 text-primary">KanaKana 新聞</h3>
              <p className="text-muted-foreground">
                專業的日語學習資訊平台
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-foreground">熱門分類</h4>
              <div className="space-y-2">
                <Link href="#" className="block text-muted-foreground hover:text-primary transition-colors">學習攻略</Link>
                <Link href="#" className="block text-muted-foreground hover:text-primary transition-colors">遊戲推薦</Link>
                <Link href="#" className="block text-muted-foreground hover:text-primary transition-colors">文化知識</Link>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-foreground">關於我們</h4>
              <div className="space-y-2">
                <Link href="#" className="block text-muted-foreground hover:text-primary transition-colors">編輯團隊</Link>
                <Link href="#" className="block text-muted-foreground hover:text-primary transition-colors">投稿須知</Link>
                <Link href="#" className="block text-muted-foreground hover:text-primary transition-colors">聯絡我們</Link>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-foreground">追蹤我們</h4>
              <div className="space-y-2">
                <Link href="#" className="block text-muted-foreground hover:text-primary transition-colors">Facebook</Link>
                <Link href="#" className="block text-muted-foreground hover:text-primary transition-colors">Instagram</Link>
                <Link href="#" className="block text-muted-foreground hover:text-primary transition-colors">YouTube</Link>
              </div>
            </div>
          </div>
          <div className="text-center mt-8 pt-8 border-t border-gaming-border">
            <p className="text-muted-foreground">
              &copy; 2025 KanaKana 新聞雜誌. 專業資訊，值得信賴。
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}