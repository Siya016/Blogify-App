import { CloudRain } from "lucide-react";

const features = [
  {
    name: "Sign up for free",
    description:
      "Unleash your creativity and share your thoughts with the world! Our blogging platform empowers you to craft captivating stories, connect with like-minded individuals, and build your personal brand. Whether you're a seasoned writer or just starting out, we make it easy to publish, discover, and grow your audience.",
    icon: CloudRain,
  },
  {
    name: "Balzing fast",
    description:
      "Experience unparalleled speed and performance with our platform! Publish, edit, and share your content instantly without any delays. Say goodbye to slow loading times and hello to a seamless, lightning-fast blogging experience.",
    icon: CloudRain,
  },
  {
    name: "Super secure with Kinde",
    description:
      "Your data's safety is our top priority. Powered by Kinde, our platform ensures robust security measures to protect your content and personal information. Enjoy peace of mind with advanced encryption, secure authentication, and reliable privacy controls.",
    icon: CloudRain,
  },
  {
    name: "Easy to use",
    description:
      "Designed with simplicity in mind, our platform makes blogging effortless. Whether you're writing, editing, or customizing your blog, enjoy an intuitive interface that lets you focus on what matters most—your content.",
    icon: CloudRain,
  },
];

export function Features() {
  return (
    <div className="py-24 sm:py-32">
      <div className="max-w-2xl mx-auto lg:text-center">
        <p className="font-semibold leading-7 text-primary">Blog Faster</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
          Get your blog up and running in minutes
        </h1>
        <p className="mt-6 text-base leading-snug text-muted-foreground">
          Right here you can create a blog in minutes. We make it easy for you
          to create a blog in minutes. The blog is very fast and easy to create.
        </p>
      </div>

      <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
        <div className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
          {features.map((feature) => (
            <div key={feature.name} className="relative pl-16">
              <div className="text-base font-semibold leading-7">
                <div className="absolute left-0 top-0 flex size-10 items-center justify-center rounded-lg bg-primary">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                {feature.name}
              </div>
              <p className="mt-2 text-sm text-muted-foreground leading-snug">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
