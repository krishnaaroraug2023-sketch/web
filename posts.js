
/*
  Blog posts for Krishna Arora's website.
  Add new posts to this array.
  Supported formatting: Markdown headings, **bold**, *italic*,
  [links](url), and ![image caption](images/photo.jpg)
*/

const POSTS = [


{
  slug: "gobble-cube-data-stack",
  title: "GobbleCube: The business of decoding quick commerce",
  cat: "Enterprise Tech / SaaS",
  date: "2026-10-30",
  body: `
The model of consumer goods businesses has broadly remained the same over decades. Manufacture a product, give it to a middleman, and they form the final link to the consumer. What has kept changing over time is the middleman. 40 years ago it was general trade (kirana stores), 25 years ago it was modern trade (supermarkets), 15 years ago it was E-commerce (Amazon, Flipkart). The newest middleman in the game is Quick Commerce.

Cracking Q-commerce has not been easy. Businesses have spent years building systems around GT and MT, relying on people on the ground. Think area sales managers, distributors, and key account managers. E-commerce, while digital, has had time to develop its own systems and processes within businesses. Q-commerce is a completely different beast, and the speed and scale at which it has grown has left businesses slow to adapt. Q-commerce operations are decentralised down to PIN codes and dark stores, and the number of moving parts makes it difficult for businesses to monitor performance at scale.

That's where GobbleCube comes in. Co-founded by three ex-Blinkit senior executives in 2022, the company calls itself *an AI-powered growth agent that helps brands scale revenue by spotting leaks, market opportunities, and automating growth across digital commerce.*

In four years since inception, they have onboarded the likes of P&G, ITC, Dabur and several new-age consumer brands. They also raised their Series A earlier this year, led by Susquehanna Venture Capital. They posted an [interesting write-up](https://sig-asiavc.com/blog/why-we-invested-in-gobblecube/) about their rationale behind the investment.

## The Four A's of Quick Commerce

Success on quick commerce is a function of four A's according to GobbleCube: **Availability, Ads, Assortment and ASP.**

**Availability** is the bedrock of success on Q-commerce. Even with demand for your product, poor dark-store-level availability directly translates to lost sales. The nature of quick commerce makes the cost of switching for the consumer almost nonexistent, creating long-term issues for brands with low availability.

**Assortment** is about understanding which products work best on Q-commerce and in which locations. What works in retail or e-commerce may not work on Q-commerce. Within a large portfolio, businesses must identify what works where and build a supply chain accordingly.

**Ads** are where it gets interesting. Q-commerce creates a unique opportunity to connect hyperlocal demand generation (through ads) with hyperlocal supply. Imagine brands running ads (Meta, Google, Q-commerce) targeted at specific PIN codes, while ensuring the relevant SKUs are available too. This makes advertising more efficient, allowing brands to drive demand precisely where they can fulfil it.

**ASP (Average Selling Price)** plays an important role in driving trial and increasing basket value. Brands need to think carefully about their price architecture on Q-commerce, using smaller packs to lower the entry barrier and bundles to encourage higher-value purchases.

I'd personally add one more dimension: **margins.** Keeping track of Contribution Margin 2 (CM2) is extremely important in Q-commerce, where commissions, discounts and advertising can quickly eat into profitability. It's important that revenue growth and scale actually translate into bottom-line growth too.

To solve for all of these, GobbleCube has a range of services across supply chain planning, ad insights, competitive mapping and growth insights.

## Data Stack: Their Operating Model

The foundation of GobbleCube's operating model for quick commerce is deceptively simple. In fact, you could replicate the basic idea yourself.

Imagine your client is Gillette. Open a Q-commerce app, search for Gillette, and maximise the quantity of each unique SKU you can add to your cart. This gives you a proxy for the inventory available for each SKU at that location.

Now imagine an automated agent doing this across every dark store in the country, every single day. That's an incredibly rich dataset tracking nationwide availability and estimated inventory.

![Gobble Cube's data stack as descibed on their website](images/gobblecube-1.png)

Where GobbleCube really adds value is in building a data stack on top of this. For example, they add PIN-code-level advertising spend data, purchase order (PO) data, pricing data and inventory movement across the supply chain. Suddenly, you can start connecting the dots between different moving parts of the business.

Imagine Gillette wants to run a targeted Meta campaign in South Delhi to promote a particular product. There is little value in generating demand through advertising if consumers then find the product out of stock. By mapping advertising activity against dark-store-level availability, brands can better coordinate where they generate demand with where they have the inventory to fulfil it.

![An image of Gobble Cube's UI](images/gobblecube-2.png)

This is just one hypothetical example. GobbleCube's website lists some interesting case studies of problems they have solved for businesses. Read them [here](https://gobblecube.ai/blog/tags/customer-stories/).

## The Road Forward: GobbleCube's Growth

In my opinion, GobbleCube's growth depends on two levers.

**One: How deeply embedded can it become within an organisation?**

This has two dimensions: across channels and across functions. GobbleCube's core strength lies in Q-commerce, but it also offers marketplace and D2C insights. Can it deepen these offerings to become equally valuable across channels? Similarly, it already has a presence across supply chain, Q-commerce accounts and, to some extent, marketing. Can it expand into other functions and become a crucial part of how consumer businesses operate?

**Two: How transferable is the technology to global markets?**

Q-commerce, in its current Indian form, is not equally prevalent across global markets. This makes international expansion more nuanced than simply replicating the existing business model.

However, the core problems GobbleCube solves: fragmented commerce data, poor inventory visibility and supply chain inefficiencies, extend beyond Q-commerce. Can its technology be adapted to other forms of digital commerce and retail in international markets?

That's where it can drive huge growth.

## Stuff I Found Interesting

- [Growth, Margins and Distribution: Truth About Quick Commerce](https://www.youtube.com/watch?v=65s6-SWr1d4)
- [The Q-Comm Growth Playbook — DSG Consumer Partners](https://www.dsgcp.com/insights/quick-commerce-growth-playbook-2025-from-renting-customers-to-owning-the-flywheel)
- [Why We Invested in GobbleCube — Susquehanna VC](https://sig-asiavc.com/blog/why-we-invested-in-gobblecube/)
- [GobbleCube's Blog and Customer Stories](https://gobblecube.ai/blog/tags/customer-stories/)

`
},

  
{
  slug: "breaking-down-indias-pet-care-market",
  title: "The business of pampering India's pets",
  cat: "Consumer / Health",
  date: "2026-11-15",
  body: `
This is my dog, Muffin. She was born in 2012 and is now 14 years old. Over the last 14 years, I've experienced how raising a dog has changed in India. What used to be visits to the neighbourhood vet have now become visits to chains like Zigly. What was once a simple *gadda* serving as her bed is now a plush bed from Heads Up For Tails. And what used to be her 5pm snack: unbranded biscuits is now yak milk chews from Dogsee Chew. 

If you’ve been a pet parent over the last decade, I’m sure you’ve experienced something exactly like this as well.

![Muffin](images/muffin-1.jpg)

The changes might seem small, but they reflect something much bigger: the evolution of India's pet care industry. What was a largely unorganised and fragmented market has turned into one of the hottest and fastest growing markets in the country.

**Industry Tailwinds**

There are two broad tailwinds I see propelling this industry.

**Tailwind 1, Demand:** Changing Indian household demographics

People are having fewer kids than ever before. India is seeing a shift towards smaller households, but people still want the joy and affection of nurturing a child, and pets are one of the first things people turn to. Pet ownership has been rising steadily over the last decade, with COVID acting as a catalyst as well.

A difference has also come about in the position pets hold in the household. Earlier, they were viewed as the guardian of the household. Now, they’re considered part of the family, and this has led to an increase in wallet share for pets.

Most importantly, the pet care market is not just for dogs anymore. Cat ownership is growing extremely fast, and that has led to the creation of an entirely new market.

**Tailwind 2, Supply:** E-commerce is trumping the distribution power that vets once had

If you’ve been a pet owner, take yourself back 15 years. If you had to get **anything** for your pet, you were completely dependent on your neighbourhood vet. They were the go to for almost everything: from food, beds, bowls, toys and leashes. If you wanted to start a brand for pets, you had no other option but to invest in an offline distribution network through vets.

Distribution has completely changed with E-Commerce, and the barriers to entry for a new brand are extremely low.

**Mapping the Value Chain of the Pet-care Industry**

The pet care industry encompasses a wide range of products and services. I’ve narrowed it down to these four segments:

**A. Marketplaces**

Riding on Tailwind #2, marketplaces have become one of the most competitive spaces in the pet care ecosystem. Heads Up For Tails (HUFT), Supertails and Zigly now sell a whole host of products on their websites. Food, clothes, beds, grooming products, toys, and anything you could possibly imagine a pet would ever need.

![The wide range of products listed on Supertails' website](images/marketplace-1.jpg)

The three big marketplaces: HUFT, Zigly and Supertails sell their own private label products on their website as well. This allows them to capture higher margins than just marketplace commissions.

**B. Vets, Healthcare & Grooming**

What used to be a fragmented network of neighbourhood vets is slowly being replaced by large vet chains. Players like Zigly, Supertails and Vetic are scaling their offline vet networks rapidly. While building this does require significant capex and is operationally complex, it creates a unique opportunity to build long term customer relationships with pet parents.

Vets are the most important touchpoint for a pet parent. They are the first point of contact when someone gets a pet, and are consulted throughout a pet’s life. Vets are the first call when something goes wrong, and the person whose opinion pet parents value the most. That's why marketplaces are also choosing to invest in vet services so intensively. It allows them to create long standing relationships and trust with the consumer. Supertails also plans on making this a data moat. Read more on this [here](https://entrepreneur.economictimes.indiatimes.com/news/startups/supertails-journey-to-becoming-what-it-always-wanted-to-be/134737505).

While Zigly and Supertails have set up their own vet services, HUFT has stayed away from it. It has chosen to partner with smaller, independent pet hospitals. That being siad, HUFT has an extremely strong offline presence, both in terms of retail and grooming services for pets. As of 2026, HUFT has around 115 physical stores and 70+ grooming locations, Zigly has 48 vet centres and stores, while Supertails has 12 clinics exclusively in Bangalore.

![HUFTs offline stores build strong brand equity](images/huft-1.jpg)

**C. Pet Food**

This is the most mature and attractive part of the ecosystem. What makes it so attractive is the combination of high repeat rates and high loyalty, creating an extremely high customer lifetime value (LTV). Once a pet parent finds a brand that works for their pet, they are going to continue purchasing it for years.

There are well established players that have been around for ages: Pedigree, Drools, Royal Canin. At the same time, many new brands have entered the space: both private labels (Sara’s from HUFT, Henlo from Supertails and Aplod from Zigly) and standalone brands like Lickicious, Benny’s Bowl and Dogsee Chew. The cat food market is also growing extremely fast, with Smylo raising capital earlier this year. There are still many whitespaces in the market, and the race is heating up.

**D. Accessories, Clothes & Toys**

Unlike food, this is a category with low brand awareness, loyalty and repeat rates. Therefore, this was a highly unbranded category for the longest time. While it still is to an extent, marketplaces are changing this, with their own private labels across beds, toys and clothes. At the same time, smaller D2C lifestyle and accessories brands are also finding whitespaces and capturing market share.

**Supertails vs Heads Up For Tails vs Zigly: three different paths**

![A comparison of India's pet care market](images/comparison-1.jpg)

**Supertails: Healthcare first**

Supertails is scaling by anchoring itself in the vet ecosystem. Its clinics build trust and retention: a pet parent who visits for a health concern is far more likely to purchase food and supplements on the same platform. On the distribution side, Supertails already operates a network of 45+ dark stores, and plans to reach a 100 over the next three years. It is betting heavily on quick commerce. Interestingly, the company has also indicated that it wants to scale its private labels carefully, as it doesn’t want to disincentivise third party brands from selling on its platform.

**Heads Up For Tails: Brand first**

HUFT is taking a different route, building its business around brand equity and an offline retail presence. It has invested heavily in its own private labels across food, accessories, clothing and toys, allowing it to differentiate clearly. Its physical stores and grooming services further build brand equity, creating multiple touchpoints with pet parents. Unlike Supertails and Zigly, HUFT has largely stayed away from building its own vet network, choosing instead to partner with independent pet hospitals. Its strategy is less about owning the healthcare relationship and more about becoming the go to brand for pet parents.

**Zigly: Corporate backed omnichannel model**

Zigly follows a slightly different path. It is part of Cosmo First, a listed company, giving Zigly access to a corporate parent rather than the conventional venture capital funding model followed by the other two. Its strategy combines physical retail, grooming, veterinary services and online commerce. While it shares similarities with both HUFT and Supertails, its expansion is ultimately constrained by the allocation priorities of Cosmo First. It has been investing in both in offline stores, vet centres, and private labels, somewhat of a mix of Supertails and HUFT’s strategies.

I find this divergence in business models interesting. All companies are addressing the same market, but are making different bets on where customer loyalty, margins and a long term moat can be built.

  `
},

];
