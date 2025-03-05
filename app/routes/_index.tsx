import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Index() {
  return (
    <div className="container mx-auto p-4">
      <Tabs defaultValue="introduce" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="introduce">Introduce</TabsTrigger>
          <TabsTrigger value="projects">Projects</TabsTrigger>
          <TabsTrigger value="contact">Contact</TabsTrigger>
        </TabsList>
        <TabsContent value="introduce">
          <div className="mt-6">
            <h1 className="text-2xl font-bold">Introduce</h1>
            <p>
              Welcome to the introduction section. Here you can find more about
              us.
            </p>
          </div>
        </TabsContent>
        <TabsContent value="projects">
          <div className="mt-6">
            <h1 className="text-2xl font-bold">Projects</h1>
            <p>Here are some of our projects. Explore and enjoy!</p>
          </div>
        </TabsContent>
        <TabsContent value="contact">
          <div className="mt-6">
            <h1 className="text-2xl font-bold">Contact</h1>
            <p>Feel free to reach out to us through this contact section.</p>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
