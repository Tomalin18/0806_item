import type { Metadata } from 'next'
import { Navigation } from '@/components/navigation'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { supabase, Product } from '@/lib/supabase'
import { generateRefLink } from '@/lib/supabase'

export const metadata: Metadata = {
  title: '多商家市集 - KanaKana',
  description: '精選優質商品，一站式購物體驗，來自多個知名商家的精選商品',
}

export default async function MarketplacePage() {
  // 獲取指定商品
  const productIds = ['PROD_001', 'PROD_002', 'PROD_003']
  
  let products: Product[] = []
  if (supabase) {
    const { data: productsData } = await supabase
      .from('products')
      .select('*, merchant:merchants(*)')
      .in('id', productIds)
    
    products = productsData || []
  }

  const refCode = process.env.REF_CODE || 'DEFAULT'

  const platformStats = [
    { number: '500+', label: '精選商品' },
    { number: '50+', label: '合作商家' },
    { number: '10K+', label: '滿意客戶' },
    { number: '99%', label: '好評率' }
  ]

  const platformFeatures = [
    {
      title: '精選商品',
      description: '嚴格篩選，確保每件商品都是精品',
      icon: '⭐'
    },
    {
      title: '多元選擇',
      description: '來自不同商家的豐富商品類別',
      icon: '🛍️'
    },
    {
      title: '安全購物',
      description: '完善的購物保障和客服支援',
      icon: '🔒'
    },
    {
      title: '快速配送',
      description: '高效的物流配送系統',
      icon: '🚀'
    }
  ]

  const testimonials = [
    {
      name: '張小明',
      rating: 5,
      comment: '商品品質很好，配送也很快！',
      product: '日語學習套裝'
    },
    {
      name: '李小華',
      rating: 5,
      comment: '客服很專業，解決問題很迅速。',
      product: '電競鍵盤'
    },
    {
      name: '王大頭',
      rating: 5,
      comment: '價格合理，商品真實如描述。',
      product: '遊戲耳機'
    }
  ]

  return (
    <div className="min-h-screen gaming-bg-gradient">
      <Navigation />
      
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 gaming-text-glow text-primary">
            多商家市集
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-secondary">
            精選商品 • 一站購足 • 品質保證
          </p>
          <p className="text-lg mb-12 text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            匯聚各大知名商家的精選商品，為您提供最優質的購物體驗。
            從日語學習工具到電競周邊，所有您需要的商品都在這裡。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="gaming-glow-green hover:gaming-glow-blue transition-all duration-300">
              開始購物
            </Button>
            <Button size="lg" variant="outline" className="gaming-neon-border hover:bg-primary/10">
              查看所有商家
            </Button>
          </div>
        </div>
      </section>

      {/* Platform Stats */}
      <section className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {platformStats.map((stat, index) => (
            <div key={index} className="p-6">
              <div className="text-4xl md:text-5xl font-bold mb-4 text-primary gaming-text-glow">
                {stat.number}
              </div>
              <div className="text-lg text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Platform Features */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-primary gaming-text-glow">
            平台優勢
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {platformFeatures.map((feature, index) => (
              <Card key={index} className="p-8 text-center gaming-neon-border bg-card hover:gaming-glow-green transition-all duration-300">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-4 text-foreground">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Hot Products Gallery */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-primary gaming-text-glow">
            熱門商品
          </h2>
          
          {products.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((product) => (
                <Card key={product.id} className="overflow-hidden gaming-neon-border bg-card hover:gaming-glow-blue transition-all duration-300">
                  {product.image_url && (
                    <div className="aspect-video bg-muted flex items-center justify-center">
                      <img 
                        src={product.image_url} 
                        alt={product.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <Badge variant="secondary" className="bg-primary text-primary-foreground">
                        {product.merchant?.name || '優選商家'}
                      </Badge>
                      <Badge variant="outline" className="text-accent border-accent">
                        熱門
                      </Badge>
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-foreground">{product.name}</h3>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-2xl font-bold text-primary gaming-text-glow">
                        NT$ {(product.price_in_cents / 100).toLocaleString()}
                      </span>
                    </div>
                    <Button 
                      asChild
                      className="w-full gaming-glow-green hover:gaming-glow-blue transition-all duration-300"
                    >
                      <a 
                        href={generateRefLink(product, refCode)} 
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        立即購買
                      </a>
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <p className="text-muted-foreground text-lg">
                正在為您準備精選商品...
              </p>
            </div>
          )}
        </div>
      </section>

      {/* User Testimonials */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-primary gaming-text-glow">
            用戶評價
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-6 bg-card border-gaming-border hover:gaming-glow-red transition-all duration-300">
                <div className="flex items-center mb-4">
                  <div className="flex text-accent">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i}>⭐</span>
                    ))}
                  </div>
                  <span className="ml-2 text-sm text-muted-foreground">
                    {testimonial.product}
                  </span>
                </div>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  &ldquo;{testimonial.comment}&rdquo;
                </p>
                <div className="text-foreground font-semibold">
                  - {testimonial.name}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6 text-primary gaming-text-glow">
            加入我們
          </h2>
          <p className="text-lg mb-8 text-muted-foreground">
            成為我們的合作夥伴，一起創造更好的購物體驗
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="gaming-glow-green hover:gaming-glow-blue transition-all duration-300">
              申請成為商家
            </Button>
            <Button size="lg" variant="outline" className="gaming-neon-border hover:bg-primary/10">
              了解合作方案
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gaming-border py-12">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground">
            &copy; 2025 KanaKana 多商家市集. 精選商品，品質保證。
          </p>
        </div>
      </footer>
    </div>
  )
}