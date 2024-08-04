import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { BookOpen } from "lucide-react";

const Index = () => {
  const [question, setQuestion] = useState("");
  const [subject, setSubject] = useState("");
  const [questions, setQuestions] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (question && subject) {
      setQuestions([...questions, { question, subject, answer: "" }]);
      setQuestion("");
      setSubject("");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center">Assignment Help Center</h1>
        
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center">
              <BookOpen className="mr-2" />
              Ask a Question
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                placeholder="Subject"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                className="w-full"
              />
              <Textarea
                placeholder="Your question"
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
                className="w-full"
              />
              <Button type="submit">Submit Question</Button>
            </form>
          </CardContent>
        </Card>

        <div className="space-y-4">
          {questions.map((q, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{q.subject}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="font-semibold">Q: {q.question}</p>
                {q.answer && <p className="mt-2">A: {q.answer}</p>}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Index;
