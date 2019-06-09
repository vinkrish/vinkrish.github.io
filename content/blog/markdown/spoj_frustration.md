---
title: SPOJ Frustration - Time Limit Exceeded
date: '2019-01-29'
---

I was playing around with python as it was new to me and thought of solving some problems on SPOJ.

while solving _Next Palindrome_ problem, I spent lot of time trying to figure out solutin on my own; after successful testing the code I submitted the solution only to find out it was exceeding the time limit.

Not having the test case they run at your disposal makes it so hard to figure out the shortcomings of your solution.

Here is the code:

```python
class Palindrome_Generator():
	def __init__(self, num):
		self.num = num
		self.num_len = len(num)

	def get_next_palindrome(self):
		if self.check_all_9s():
			return self.for_all_9s()
		else:
			current_num = self.make_int(self.num)
			immediate_palindrome = self.get_immediate_palindrome()
			if current_num < immediate_palindrome:
				return immediate_palindrome
			else:
				self.update_successor()
				if self.num_len%2 == 0:
					return(self.get_immediate_palindrome())
				else:
					return(self.get_immediate_palindrome())

	def get_immediate_palindrome(self):
		_num = self.num.copy()
		for i in range(self.num_len // 2):
				_num[self.num_len-1-i] = _num[i]
		return self.make_int(_num)

	def update_successor(self):
		carry = 1
		half_num_len = self.num_len//2
		if self.num_len %2 == 0:
			odd_even = 0
			i = half_num_len-1
			j = half_num_len
		else:
			odd_even = 1
			i = half_num_len
			j = half_num_len

		for k in range(half_num_len+odd_even):
			self.num[i], carry = self.carry_successor(int(self.num[i]), int(self.num[j]), carry)
			i -= 1
			j += 1
			if carry == 0:
				break

	def carry_successor(self, prev, next, carry):
		if prev==9 and next==9:
			return 0, 1
		elif prev <= next:
			return prev+1, 0
		else:
			return prev, 0

	def check_all_9s(self):
		return all(int(i) == 9 for i in self.num)

	def for_all_9s(self):
		palin = [1] + [0] * (self.num_len-1)+ [1]
		return self.make_int(palin)

	def make_int(self, num):
		_str = [str(_num) for _num in num]
		return int(''.join(_str))

count = int(input('Enter the count of number you wanna test :'))
numbers = []

for c in range(count):
    numbers.append(int(input('Enter the number :')))

for n in numbers:
	palindrome = Palindrome_Generator(list(str(n)))
	print(palindrome.get_next_palindrome())
```

Time complexity is **O(n)** as there are no nested for loops, I found solution with different mathematical approach but still in the end all I wanted was my solution to be accepted.

Any improvements are welcome.