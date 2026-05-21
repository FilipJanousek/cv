import { Component, signal } from '@angular/core';

type LanguageCode = 'en' | 'cs';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('my-angular-app');
  protected readonly selectedLanguage = signal<LanguageCode>('cs');
  protected readonly content = {
    en: {
      name: 'Filip Janoušek',
      titles: ['Software Engineer', 'Software Architect'],
      sections: [
        {'title': 'About me', 'paragraphs': [
          'I am an <strong>ICT professional</strong> with <strong>more than 15 years of experience</strong> across <strong>technology solutions</strong>, <strong>web technologies</strong> and <strong>system administration</strong>. Over the last approximately <strong>8 years</strong>, my work has increasingly focused on <strong>software development</strong>, <strong>application design</strong> and <strong>automation</strong>. Before becoming a <strong>freelancer in 2020</strong>, I gained broad technical experience as an <strong>IT administrator</strong>, <strong>webmaster</strong> and <strong>junior frontend developer</strong>. Since 2020, I have been helping clients <strong>design</strong>, <strong>build</strong>, <strong>automate</strong> and <strong>improve their digital systems</strong>.',
          'I primarily work with <strong>PHP</strong>, <strong>JavaScript</strong>, <strong>Python</strong> and <strong>related frameworks</strong>. Besides <strong>traditional software development</strong>, I also have experience with <strong>OutSystems ODC</strong>, one of the most advanced <strong>low-code platforms</strong> currently available.',
          'My long-term experience in the ICT field has taught me how to quickly understand different business domains, adapt to new technologies, and deliver practical solutions tailored to each project\'s needs.',
          'My work focuses mainly on <strong>web application development</strong>, <strong>process automation</strong>, <strong>technical solution design</strong>, and implementation across various types of projects. I have provided ICT services to a range of companies, including <strong>Škoda Auto</strong>, <strong>Alove</strong>, <strong>ArtMaster</strong>, <strong>Defend Insurance</strong>, and others.'
        ]},
        {'title': 'What I can offer', 'paragraphs': [
          '<strong>I offer clients</strong> a <strong>flexible and direct form of cooperation</strong> based on <strong>practical technical experience</strong>, <strong>fast communication</strong> and the ability to <strong>work independently</strong>. As a <strong>freelancer</strong>, I can often <strong>adapt faster than larger teams</strong> and provide support in situations where <strong>flexibility</strong>, <strong>focus</strong> and <strong>clear ownership</strong> are important.',
  'When needed, I can work <strong>outside standard business hours</strong>, including <strong>evenings</strong>, <strong>weekends</strong> or <strong>holidays</strong>. This can be helpful for <strong>urgent tasks</strong>, <strong>deployments</strong>, <strong>maintenance windows</strong> or <strong>focused work</strong> that should not interrupt regular business operations. This type of availability is always based on <strong>mutual agreement</strong>, <strong>project priorities</strong> and <strong>agreed cooperation terms</strong>.',
  'I combine experience in <strong>software development</strong>, <strong>system administration</strong>, <strong>web technologies</strong>, <strong>automation</strong>, <strong>documentation</strong> and <strong>solution design</strong>. Thanks to this, I can help clients not only with <strong>writing code</strong>, but also with <strong>understanding the problem</strong>, <strong>proposing a practical solution</strong>, <strong>improving existing systems</strong> and <strong>documenting important processes</strong>.'
        ]},
      ],
      languages: ['Czech - native speaker', 'English - intermediate'],
      skills: [
        {'title': 'Frontend', 'items': ['JavaScript / TypeScript', 'Angular / Vue / React', 'Bootstrap / Tailwind CSS']},
        {'title': 'Backend', 'items': ['PHP / Symfony', 'Doctrine ORM', 'REST API integrations', 'Business workflow logic']},
        {'title': 'Database', 'items': ['MySQL / PostgreSQL', 'SQL / DQL optimization']},
        {'title': 'Tools & Platforms', 'items': ['AI-assisted development', 'Docker / Docker Compose', 'Linux / Nginx / Traefik', 'Git / Azure DevOps', 'OutSystems ODC']}
      ]
    },
    cs: {
      name: 'Filip Janoušek',
      titles: ['Software Engineer', 'Software Architect'],
      sections: [
        {
          'title': 'O mně',
          'paragraphs': [
            'Jsem <strong>ICT profesionál</strong> s <strong>více než 15 lety zkušeností</strong> napříč oblastmi <strong>technologických řešení</strong>, <strong>webových technologií</strong> a <strong>správy systémů</strong>. Během posledních přibližně <strong>8 let</strong> se má práce stále více zaměřuje na <strong>vývoj softwaru</strong>, <strong>návrh aplikací</strong> a <strong>automatizaci</strong>. Než jsem se v roce <strong>2020 stal freelancerem</strong>, získal jsem široké technické zkušenosti jako <strong>IT administrátor</strong>, <strong>webmaster</strong> a <strong>junior frontend developer</strong>. Od roku 2020 pomáhám klientům <strong>navrhovat</strong>, <strong>vytvářet</strong>, <strong>automatizovat</strong> a <strong>zlepšovat jejich digitální systémy</strong>.',
            'Primárně pracuji s technologiemi <strong>PHP</strong>, <strong>JavaScript</strong>, <strong>Python</strong> a <strong>souvisejícími frameworky</strong>. Kromě <strong>tradičního vývoje softwaru</strong> mám také zkušenosti s platformou <strong>OutSystems ODC</strong>, jednou z nejpokročilejších <strong>low-code platforem</strong> současnosti.',
            'Moje dlouhodobé zkušenosti v oblasti ICT mě naučily rychle porozumět různým obchodním oblastem, přizpůsobit se novým technologiím a dodávat praktická řešení přizpůsobená potřebám konkrétního projektu.',
            'Má práce se zaměřuje především na <strong>vývoj webových aplikací</strong>, <strong>automatizaci procesů</strong>, <strong>návrh technických řešení</strong> a implementaci napříč různými typy projektů. ICT služby jsem poskytoval celé řadě společností, mezi které patří například <strong>Škoda Auto</strong>, <strong>Alove</strong>, <strong>ArtMaster</strong>, <strong>Defend Insurance</strong> a další.'
          ]
        },
        {
          'title': 'Co mohu nabídnout',
          'paragraphs': [
            '<strong>Klientům nabízím</strong> <strong>flexibilní a přímou formu spolupráce</strong> založenou na <strong>praktických technických zkušenostech</strong>, <strong>rychlé komunikaci</strong> a schopnosti <strong>pracovat samostatně</strong>. Jako <strong>freelancer</strong> se často dokážu <strong>přizpůsobit rychleji než větší týmy</strong> a poskytnout podporu v situacích, kde jsou důležité <strong>flexibilita</strong>, <strong>soustředění</strong> a <strong>jasná odpovědnost za výsledek</strong>.',
            'V případě potřeby mohu pracovat i <strong>mimo standardní pracovní dobu</strong>, včetně <strong>večerů</strong>, <strong>víkendů</strong> nebo <strong>svátků</strong>. To může být užitečné u <strong>urgentních úkolů</strong>, <strong>nasazení do provozu</strong>, <strong>servisních oken</strong> nebo <strong>soustředěné práce</strong>, která by neměla narušit běžný provoz firmy. Tento typ dostupnosti je vždy založen na <strong>vzájemné dohodě</strong>, <strong>prioritách projektu</strong> a <strong>dohodnutých podmínkách spolupráce</strong>.',
            'Kombinuji zkušenosti z oblastí <strong>vývoje softwaru</strong>, <strong>správy systémů</strong>, <strong>webových technologií</strong>, <strong>automatizace</strong>, <strong>dokumentace</strong> a <strong>návrhu řešení</strong>. Díky tomu mohu klientům pomoci nejen se <strong>psaním kódu</strong>, ale také s <strong>pochopením problému</strong>, <strong>návrhem praktického řešení</strong>, <strong>zlepšováním existujících systémů</strong> a <strong>dokumentací důležitých procesů</strong>.'
          ]
        },
      ],
      languages: ['Čeština - rodilý mluvčí', 'Angličtina - středně pokročilá'],
      skills: [
        {'title': 'Frontend', 'items': ['JavaScript / TypeScript', 'Angular / Vue / React', 'Bootstrap / Tailwind CSS']},
        {'title': 'Backend', 'items': ['PHP / Symfony', 'Doctrine ORM', 'REST API integrace', 'Business workflow logika']},
        {'title': 'Databáze', 'items': ['MySQL / PostgreSQL', 'SQL / DQL optimalizace']},
        {'title': 'Nástroje & Platformy', 'items': ['AI-assisted development', 'Docker / Docker Compose', 'Linux / Nginx / Traefik', 'Git / Azure DevOps', 'OutSystems ODC']}
      ]
    }
  }
}
