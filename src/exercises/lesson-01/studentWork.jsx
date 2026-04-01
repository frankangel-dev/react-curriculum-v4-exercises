//Lesson-01 Introduction to React
//Exercise: Build an "About Me" Component in this file

export default function StudentWork() {
  const name = 'Frank Angel';
  const age = 30;
  const hobbies = ['Coding', 'Gaming', 'Working Out', 'Cooking'];

  return (
    <div>
      <h1>About Me</h1>
      <p>
        Hi, my name is {name} and I am {age} years old. I&apos;m a passionate
        web developer who loves building creative projects and bringing ideas to
        life through code. When I&apos;m not coding, you can find me exploring
        new games, staying active, or experimenting in the kitchen!
      </p>
      <h2>Hobbies</h2>
      <ul>
        {hobbies.map((hobby, index) => (
          <li key={index}>{hobby}</li>
        ))}
      </ul>
    </div>
  );
}
