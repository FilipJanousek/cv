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
      texts: {
        contact: 'Contact',
        languages: 'Languages',
        skills: 'Skills',
      },
      titles: ['Software Engineer', 'Software Architect'],
      sections: [
        {'title': 'About me', 'paragraphs': [
          'I have been working professionally in ICT for more than 15 years. I started as an IT administrator, webmaster, and junior frontend developer, gradually moving into full stack development. In recent years, I have increasingly focused on software architecture design and technical solution design.',
          'Since 2020, I have been working as a freelancer and cooperating with my clients fully remotely. In my work, I try to use AI in an AI-assisted development mode - as a tool to support development, analysis, and solution design. At the same time, I always consider where AI implementation truly makes sense and where it does not bring real value.',
          'My long-term experience in the field has taught me to adapt quickly to new technologies and deliver practical solutions tailored to the needs of each specific project. I have provided my services to a wide range of clients, including Škoda Auto, Alove, Defend Insurance, and others.'
        ]},
        {'title': 'What I can offer', 'paragraphs': [
          'I offer clients flexible and direct cooperation based on practical technical experience, fast communication, and the ability to complete tasks independently. As a freelancer, I can often adapt more quickly than larger teams and provide support especially in situations where flexibility, focus, and clear responsibility for the result are important.',
          'When needed, I can also work outside standard business hours, including evenings, weekends, or public holidays. This can be useful for urgent tasks, production deployments, maintenance windows, or focused work that should not disrupt the company’s normal operations. This type of availability is always based on mutual agreement, project priorities, and agreed cooperation terms.',
          'I combine experience in software development, system administration, web technologies, automation, documentation, and technical solution design. This allows me to help clients not only with development itself, but also with problem analysis, practical solution design, improvement of existing systems, and clear documentation of important processes.'
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
      texts: {
        contact: 'Kontakt',
        languages: 'Jazyky',
        skills: 'Dovednosti',
      },
      titles: ['Software Engineer', 'Software Architect'],
      sections: [
        {
          'title': 'O mně',
          'paragraphs': [
            'V ICT se profesně pohybuji více než 15 let. Začínal jsem jako IT administrátor, webmaster a junior frontend developer, postupně jsem se posunul k full stack vývoji a v posledních letech se stále více zaměřuji na návrh softwarové architektury a technických řešení.',
            'Od roku 2020 působím jako freelancer a se svými klienty spolupracuji výhradně na dálku. Při práci se snažím využívat AI v režimu AI-assisted development, tedy jako nástroj pro podporu vývoje, analýzy a návrhu řešení. Zároveň vždy přemýšlím nad tím, kde má implementace AI skutečný smysl a kde naopak nepřináší reálnou hodnotu.',
            'Dlouhodobé zkušenosti v oboru mě naučily rychle se přizpůsobit novým technologiím a dodávat praktická řešení přizpůsobená potřebám konkrétního projektu. Své služby jsem poskytoval již celé řadě klientů, mezi které patří například Škoda Auto, Alove, Defend Insurance a další.'
          ]
        },
        {
          'title': 'Co mohu nabídnout',
          'paragraphs': [
            'Klientům nabízím flexibilní a přímou spolupráci postavenou na praktických technických zkušenostech, rychlé komunikaci a schopnosti samostatně dotahovat věci do konce. Díky freelance formě spolupráce se dokážu často přizpůsobit rychleji než větší týmy a pomoci zejména v situacích, kde je důležitá flexibilita, soustředění a jasná odpovědnost za výsledek.',
            'V případě potřeby mohu pracovat také mimo standardní pracovní dobu, například večer, o víkendech nebo během svátků. Tato dostupnost může být užitečná u urgentních úkolů, produkčních nasazení, servisních oken nebo u práce, která vyžaduje klid a neměla by narušit běžný provoz firmy. Vždy se však odvíjí od konkrétní dohody, priorit projektu a nastavených podmínek spolupráce.',
            'Kombinuji zkušenosti z vývoje softwaru, správy systémů, webových technologií, automatizace, dokumentace a návrhu technických řešení. Díky tomu mohu klientům pomoci nejen se samotným vývojem, ale také s analýzou problému, návrhem praktického řešení, zlepšováním existujících systémů a srozumitelnou dokumentací důležitých procesů.'
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
