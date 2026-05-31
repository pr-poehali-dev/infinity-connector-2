import { useEffect, useState } from "react";
import { Search, BarChart2, Target, TrendingUp, ArrowRight, MessageCircle, Mail } from "lucide-react";
import Icon from "@/components/ui/icon";

const Index = () => {
  const [visibleSections, setVisibleSections] = useState<Record<string, boolean>>({});

  useEffect(() => {
    const observers: Record<string, IntersectionObserver> = {};
    const sectionIds = ["hero", "features", "how", "pricing", "cta"];

    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (!element) return;

      observers[id] = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => ({ ...prev, [id]: true }));
            observers[id].unobserve(element);
          }
        },
        { threshold: 0.15 }
      );

      observers[id].observe(element);
    });

    return () => {
      Object.values(observers).forEach((observer) => observer.disconnect());
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="fixed top-0 w-full bg-background/80 backdrop-blur-2xl border-b border-accent/20 z-50">
        <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
          <div className="flex items-center">
            <div className="font-display font-bold text-2xl tracking-tighter bg-gradient-to-r from-white via-accent to-accent/80 bg-clip-text text-transparent">
              Axora Consulting
            </div>
          </div>
          <nav className="hidden md:flex gap-10 text-sm font-medium">
            <a href="#features" className="text-muted-foreground hover:text-white transition-colors">
              Что мы делаем
            </a>
            <a href="#how" className="text-muted-foreground hover:text-white transition-colors">
              Как работаем
            </a>
            <a href="#pricing" className="text-muted-foreground hover:text-white transition-colors">
              Форматы
            </a>
          </nav>
          <div className="flex gap-3">
            <a
              href="https://t.me/axorakon"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 text-sm font-medium bg-gradient-to-r from-accent via-accent to-accent/80 text-black rounded-full hover:shadow-lg hover:shadow-accent/40 transition-all font-semibold"
            >
              Написать в Telegram
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="hero" className="relative pt-32 pb-32 px-6 min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 w-full h-full flex items-center justify-center overflow-hidden">
          <img src="/images/black-hole-gif.gif" alt="Background animation" className="w-auto h-3/4 object-contain" />
        </div>
        <div className="absolute inset-0 bg-black/70" />

        <div className="relative z-10 max-w-7xl mx-auto w-full">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div
              className={`transition-all duration-1000 ${visibleSections["hero"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
            >
              <div className="mb-8 inline-block">
                <span className="text-xs font-medium tracking-widest text-accent/80 uppercase">
                  Маркетинговый консалтинг
                </span>
              </div>
              <h1 className="text-6xl lg:text-7xl font-display font-black leading-tight mb-8 tracking-tighter">
                <span className="bg-gradient-to-br from-white via-white to-accent/40 bg-clip-text text-transparent">
                  Ваш маркетинг
                </span>
                <br />
                <span className="text-accent">работает вхолостую?</span>
              </h1>
              <p className="text-xl text-white/80 leading-relaxed mb-10 max-w-xl font-light">
                Мы проводим глубокий аудит: анализируем каналы, воронку и цифры. 
                Находим, что тормозит рост, и даём чёткий план — что убрать, что добавить, как перераспределить бюджет.
              </p>
              <div className="flex gap-4 mb-12 flex-col sm:flex-row">
                <a
                  href="https://t.me/axorakon"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group px-8 py-4 bg-gradient-to-r from-accent to-accent/90 text-black rounded-full hover:shadow-2xl hover:shadow-accent/50 transition-all font-semibold text-lg flex items-center gap-3 justify-center"
                >
                  Заказать аудит
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition" />
                </a>
                <a
                  href="mailto:trust@axora.ru"
                  className="px-8 py-4 border border-accent/40 rounded-full hover:border-accent/70 hover:bg-accent/10 transition-all font-medium text-lg text-white text-center"
                >
                  Написать на почту
                </a>
              </div>
              <div className="grid grid-cols-3 gap-8 pt-8 border-t border-white/10">
                <div>
                  <div className="text-2xl font-bold text-accent mb-2">3–7 дней</div>
                  <p className="text-sm text-white/60">Срок аудита</p>
                </div>
                <div>
                  <div className="text-2xl font-bold text-white mb-2">Честно</div>
                  <p className="text-sm text-white/60">Говорим только то, что есть</p>
                </div>
                <div>
                  <div className="text-2xl font-bold text-accent mb-2">Конкретно</div>
                  <p className="text-sm text-white/60">План действий, не вода</p>
                </div>
              </div>
            </div>

            <div
              className={`relative h-96 lg:h-[550px] transition-all duration-1000 flex items-center justify-center ${visibleSections["hero"] ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-accent/30 via-transparent to-transparent rounded-3xl blur-3xl animate-pulse" />
              <div className="relative z-10 w-full max-w-sm lg:max-w-md">
                <div className="bg-card/60 backdrop-blur-xl border border-accent/20 rounded-2xl p-8 space-y-5">
                  <div className="flex items-center gap-3 pb-4 border-b border-accent/10">
                    <div className="w-3 h-3 rounded-full bg-accent animate-pulse" />
                    <span className="text-sm text-white/60 font-mono">Axora · Отчёт по аудиту</span>
                  </div>
                  {[
                    { label: "Каналы проанализированы", value: "все", color: "text-accent" },
                    { label: "Воронка продаж", value: "разобрана", color: "text-white" },
                    { label: "Бюджет", value: "оптимизирован", color: "text-accent" },
                    { label: "Рекомендации", value: "письменно", color: "text-white/70" },
                  ].map((row, i) => (
                    <div key={i} className="flex justify-between items-center">
                      <span className="text-sm text-white/50">{row.label}</span>
                      <span className={`text-sm font-bold ${row.color}`}>{row.value}</span>
                    </div>
                  ))}
                  <div className="pt-4 border-t border-accent/10">
                    <p className="text-xs text-white/40 font-mono">Арамэ Геворгян · CEO, Axora Consulting</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-32 px-6 bg-accent/5">
        <div className="max-w-7xl mx-auto">
          <div
            className={`text-center mb-20 transition-all duration-1000 ${visibleSections["features"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            <span className="text-xs font-medium tracking-widest text-accent/60 uppercase">Что мы делаем</span>
            <h2 className="text-5xl lg:text-6xl font-display font-black tracking-tighter mt-4 mb-6">
              <span className="bg-gradient-to-r from-white via-white to-accent/40 bg-clip-text text-transparent">
                Полный разбор вашего маркетинга
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: "Search",
                title: "Аудит рекламных каналов",
                desc: "Разбираем каждый канал: контекст, таргет, SEO, email. Находим где деньги уходят впустую.",
              },
              {
                icon: "BarChart2",
                title: "Анализ воронки продаж",
                desc: "Смотрим на цифры на каждом этапе — от клика до оплаты. Находим узкие места и утечки.",
              },
              {
                icon: "TrendingUp",
                title: "Перераспределение бюджета",
                desc: "Конкретные рекомендации: куда направить деньги, от чего отказаться для максимального ROI.",
              },
              {
                icon: "Target",
                title: "Анализ аудитории",
                desc: "Проверяем, те ли люди видят вашу рекламу. Сегментация и точная настройка таргетинга.",
              },
              {
                icon: "MessageCircle",
                title: "Оценка посылов и креативов",
                desc: "Разбираем что говорите рынку — насколько это резонирует с болями и желаниями клиентов.",
              },
              {
                icon: "BarChart2",
                title: "Конкурентный анализ",
                desc: "Смотрим на рынок: как позиционируются конкуренты и где у вас пространство для роста.",
              },
            ].map((item, i) => {
              const isVisible = visibleSections["features"];
              return (
                <div
                  key={i}
                  className={`group p-8 border border-accent/10 hover:border-accent/40 rounded-2xl bg-card/50 hover:bg-card/80 transition-all duration-500 ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  }`}
                  style={{ transitionDelay: `${i * 100}ms` }}
                >
                  <div className="w-12 h-12 rounded-xl bg-accent/10 group-hover:bg-accent/20 flex items-center justify-center mb-6 transition-colors">
                    <Icon name={item.icon} size={22} className="text-accent" />
                  </div>
                  <h3 className="font-display font-bold text-lg mb-3">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how" className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div
            className={`text-center mb-20 transition-all duration-1000 ${visibleSections["how"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            <span className="text-xs font-medium tracking-widest text-accent/60 uppercase">Процесс</span>
            <h2 className="text-5xl lg:text-6xl font-display font-black tracking-tighter mt-4">
              <span className="bg-gradient-to-r from-white via-white to-accent/40 bg-clip-text text-transparent">
                Как мы работаем
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { num: "01", title: "Созвон", desc: "Знакомимся, разбираем ситуацию, фиксируем задачу и цели" },
              { num: "02", title: "Сбор данных", desc: "Получаем доступы к кабинетам, CRM и аналитике для глубокого анализа" },
              { num: "03", title: "Аудит", desc: "3–7 дней: разбираем каналы, воронку, цифры и конкурентов" },
              { num: "04", title: "Отчёт", desc: "Чёткий документ с выводами и конкретным планом действий" },
            ].map((step, i) => {
              const isVisible = visibleSections["how"];
              return (
                <div
                  key={i}
                  className={`relative transition-all duration-700 ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  }`}
                  style={{ transitionDelay: `${i * 150}ms` }}
                >
                  <div className="group bg-accent/10 hover:bg-accent/20 border border-accent/20 hover:border-accent/40 rounded-2xl p-8 h-full flex flex-col justify-between transition-all backdrop-blur-sm cursor-pointer">
                    <div>
                      <div className="text-5xl font-display font-black text-accent mb-4 group-hover:scale-110 transition-transform">
                        {step.num}
                      </div>
                      <h3 className="font-display font-bold text-xl mb-2">{step.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                  {i < 3 && (
                    <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-0.5 bg-gradient-to-r from-accent/40 to-transparent" />
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-32 px-6 bg-accent/5">
        <div className="max-w-5xl mx-auto">
          <div
            className={`text-center mb-20 transition-all duration-1000 ${visibleSections["pricing"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            <span className="text-xs font-medium tracking-widest text-accent/60 uppercase">Форматы работы</span>
            <h2 className="text-5xl lg:text-6xl font-display font-black tracking-tighter mt-4">
              <span className="bg-gradient-to-r from-white via-white to-accent/40 bg-clip-text text-transparent">
                Выберите формат
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                name: "Аудит",
                price: "По запросу",
                features: [
                  "Анализ всех рекламных каналов",
                  "Разбор воронки продаж",
                  "Оценка бюджета и ROI",
                  "Письменный отчёт с рекомендациями",
                ],
                highlight: false,
                cta: "Обсудить аудит",
              },
              {
                name: "Консалтинг",
                price: "По запросу",
                features: [
                  "Всё из аудита",
                  "Сопровождение внедрения изменений",
                  "Еженедельные встречи и контроль",
                  "Личный контакт с Арамэ Геворгян",
                ],
                highlight: true,
                cta: "Обсудить формат",
              },
            ].map((plan, i) => {
              const isVisible = visibleSections["pricing"];
              return (
                <div
                  key={i}
                  className={`group relative transition-all duration-700 ${
                    isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
                  } ${plan.highlight ? "md:scale-105" : ""}`}
                  style={{ transitionDelay: `${i * 200}ms` }}
                >
                  {plan.highlight && (
                    <div className="absolute -inset-1 bg-gradient-to-r from-accent via-accent to-accent/60 rounded-3xl opacity-20 blur-xl group-hover:opacity-30 transition" />
                  )}
                  <div
                    className={`relative p-10 border rounded-2xl h-full flex flex-col justify-between backdrop-blur-sm transition-all ${
                      plan.highlight ? "border-accent/40 bg-accent/10" : "border-accent/10 bg-card/50 hover:bg-card/80"
                    }`}
                  >
                    <div>
                      <h3 className="font-display font-bold text-2xl mb-2">{plan.name}</h3>
                      <p className="text-4xl font-black text-accent mb-8">{plan.price}</p>
                      <ul className="space-y-4 mb-10">
                        {plan.features.map((f, j) => (
                          <li key={j} className="flex gap-3 text-sm items-start">
                            <ArrowRight className="w-4 h-4 text-accent flex-shrink-0 mt-1" />
                            <span className="text-foreground/80">{f}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <a
                      href="https://t.me/axorakon"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-full px-6 py-4 rounded-xl font-semibold transition-all text-center block ${
                        plan.highlight
                          ? "bg-gradient-to-r from-accent to-accent/80 text-black hover:shadow-xl hover:shadow-accent/40"
                          : "border border-accent/20 hover:border-accent/40 hover:bg-accent/5 text-white"
                      }`}
                    >
                      {plan.cta}
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="cta" className="py-32 px-6">
        <div
          className={`max-w-4xl mx-auto text-center transition-all duration-1000 ${visibleSections["cta"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <h2 className="text-5xl lg:text-6xl font-display font-black tracking-tighter mb-6">
            <span className="bg-gradient-to-r from-white via-white to-accent/40 bg-clip-text text-transparent">
              Готовы узнать правду о вашем маркетинге?
            </span>
          </h2>
          <p className="text-xl text-muted-foreground mb-12 font-light max-w-2xl mx-auto">
            Напишите нам — и мы обсудим, как аудит поможет найти точки роста именно в вашем бизнесе.
          </p>
          <div className="flex gap-4 justify-center flex-col sm:flex-row">
            <a
              href="https://t.me/axorakon"
              target="_blank"
              rel="noopener noreferrer"
              className="group px-10 py-5 bg-gradient-to-r from-accent to-accent/90 text-black rounded-full hover:shadow-2xl hover:shadow-accent/40 transition-all font-bold text-lg flex items-center gap-3 mx-auto sm:mx-0 justify-center"
            >
              Написать в Telegram
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition" />
            </a>
            <a
              href="mailto:trust@axora.ru"
              className="group px-10 py-5 border border-accent/40 rounded-full hover:border-accent/70 hover:bg-accent/10 transition-all font-bold text-lg flex items-center gap-3 mx-auto sm:mx-0 justify-center text-white"
            >
              <Mail className="w-5 h-5 text-accent" />
              trust@axora.ru
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-accent/10 py-12 px-6 bg-background/50">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-muted-foreground">
          <p>© 2026 Axora Consulting — Маркетинговый консалтинг</p>
          <div className="flex gap-8">
            <a href="https://t.me/axorakon" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              Telegram
            </a>
            <a href="mailto:trust@axora.ru" className="hover:text-white transition-colors">
              trust@axora.ru
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;