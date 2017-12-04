package main

import (
	"unicode"
	"fmt"
)

func RemoveEven(input [] int) []int {
	var output []int;
	for i:=0; i < len(input); i++{
		if input[i] % 2 != 0 {
			output = append(output, input[i]);
		}
	}
	return output;
}

func PowerGenerator(number int) (func() int){
	x := make(map[int]int);
	return func() int{
		value_, ok := x[number];
		if ok{
			x[number] = value_ * number
		} else {
			x[number] = number
		}
		return x[number]
	}
}

func DifferentWordsCount(str string) int {
	var s = make(map[string]int)

	word := ""
	str+= " "
	for _, letter := range(str){
		if unicode.IsLetter(letter){
			word += string(unicode.ToLower(letter));
		} else if word != ""{
				_, ok := s[word]
				if(!ok) {
					s[word] = 1
				}
			}
			word = ""

	}
	return len(s)
}



func main()  {
	input := []int{0, 3, 2, 5}
	result := RemoveEven(input)
	fmt.Println(result) // Должно напечататься [3 5]

	gen := PowerGenerator(2)
	fmt.Println(gen()) // Должно напечатать 2
	fmt.Println(gen()) // Должно напечатать 4
	fmt.Println(gen()) // Должно напечатать 8

	fmt.Println(DifferentWordsCount("Hello, world!HELLO  wOrlD...12"))
	// Должно напечатать 2


	fmt.Println(DifferentWordsCount("AAAAA aaaaa AAaaa"))

}
