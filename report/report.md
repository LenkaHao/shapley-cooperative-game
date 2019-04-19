### Cooperative games and Shapley value



#### 1. Cooperative games

In cooperative games, players are allowed to communication, form coalitions and make binding agreements. We focus on what groups of players can achieve rather than individuals. 



### Cooperative games and Shapley value



#### 1. Cooperative games and core

In cooperative games, players are allowed to communication, form coalitions and make binding agreements. We focus on what groups of players can achieve rather than individuals. 



**1. 1 Cooperative games with transferable utility**

<u>Cooperative games</u>

For some games, outcomes are specified in terms of a utility that can be divided among a coalition. These are games with transferable utility. The following assumptions are made in a coalitional game with transferable utility:

1. the payoffs may be freely redistributed among its members
2. a universal currency is used for exchange in the system
3. each coalition can be assigned a single value as its payoff

These games consist of

1. $N = \{1, 2, ..., n\}$, a set of players
2. $S$, a coalition, where $S \sub N$
3. a real-valued function $v$ that associates $S$ with $v(S)$, the total payoff of the coalition



<u>The coalitional form</u> 

The coalition form of an cooperaative game is given by the pair $(N, v)$, and satisfies

1. $v(\empty) = 0$, meaning that the empty set has payoff 0
2. if $S \bigcap T = \emptyset$, then $v(S) + v(T) \le v(S+T)$, meaning that the larger the coalition, the higher the payoff. A game satifies this constraint is superadditive.



*Example:*

*A group of customers must be connected to a power plant provided by a central facility. A customer can either connect to the facility directly, or connect to some other connected customer.*

*In this coalitional game $(N, v)$, $N$ is the set of customers, and $v(S) = ($the cost of connecting all customers directly to the facility$)- ($the cost of the minimum spanning tree that connects all customers in $S$ and the facility)*



**1.2 Payoff vector and the core**

For a coalition game, we are interested in which coalition to form, and how that coalition divides its payoff among its players. According to superadditivity, this coalition should be $N$. We then need to figure out how the payoff $v(N)$ should be split.

<u>Payoff vector</u>

Let $\vec{x} = (x_1, x_2, …, x_n)$ denote the payoff division, where player $i$ 's payoff is $x_i$. Then $\vec{x}$ has two properties:

1. $\sum^n_{i=1} x_i = v(N)$: in a superadditive game, coalition $N$ has the highest overall payoff
2. $x_i \ge v(\{i\})$ for all $i$: a player will only receive payoff that is at least the same as the payoff he could obtain by himself.

Suppose we have a coalition $S$ with payoff $v(S)$. For a $\vec{x}$, let the total return be $x(S) = \sum_{i \in S} x_i$. 

A payoff vector $\vec{x}$ is unstable through a coliation $S$ if $v(S) > \sum_{i \in S}x_i$. The payoff vector is only stable when $x(S) \ge v(S)$; otherwise there must exist $y(S) = v(S)$ where the members could receive more than in $\vec{x}$.



<u>Core</u>

The **core** of a coalitional game is the set $C$ of all stable payoff vectors:

$C = \{\vec{x} = (x_1, …, x_n): \sum_{i \in N} x_i = v(N) \space {\rm{and}} \space x(S) \ge v(S) \space {\rm{for all }} \space S \in N \}$

In words, the core is the set of feasible payoff divisions for the grand coalition that no coalition can upset.

*Example:*

*Consider the following three-person game. Three players can together obtain \$1 to share, any two can obtain $\alpha$ , and a singer player gets nothing.*

*$v(N) = 1$, $v(\{1, 2\}) = v(\{1, 3\}) = v(\{2, 3\}) = \alpha$, $v(\{1\}) = v(\{2\}) = v(\{3\}) = 0$*

*The core of the game is $\{(x_1, x_2, x_3): x_1 + x_2 + x_3 = 1, x_1 + x_2 \ge \alpha, x_1 + x_3 \ge \alpha, x_2 + x_3 \ge \alpha, x_1>0, x_2>0, x_3 > 0\}$*

*If $\alpha \gt \frac{2}{3}$, the core is empty. If $\alpha = \frac{2}{3}$, the core is $\{ (\frac{1}{3}, \frac{1}{3}, \frac{1}{3}) \}$. Otherwise the core consists of infinite points.*



#### 2. Shapley Value and its computation

**2.1 The shapley value**

The core of a game only presents a set of payoff distribution. It doesn't distinguish one point of the set as preferable to another, i.e., it doesn't show which the best distribution is. Besides, the core can sometimes be empty.

The Shapley value solves the following problem: how the payoff should be split among players. It considers the contribution of each player in the coalition, and a game always has a solution.

<u>Value function</u>

A value function $\phi(v) = (\phi_1(v), \phi_2(v), …, \phi_n(v))$ is a function that assigns each $(N, v)$ an n-tuple of real numbers, where $\phi_i(v)$ is the payoff of player $i$ in the game.

<u>The Shapley Axioms</u> for $\phi(v)$:

1. Efficiency: $\sum_{i \in N} \phi_i(v) = v(N)$. The payoff of each player add up to $v(N)$.

2. Symmetry: if $i, j \notin S$ and $v(S \bigcup {i}) = v(S \bigcup j)$, then $\phi_i(v) = \phi_j(v)$. If two players contribute the same to a coalition, they should get the same payoff

3. Dummy Axiom: if $v(S \bigcup i) = v(S)$, then $\phi_i(v) = 0$. If a player contributions nothing to any coalition, he gets nothing.
4. Additivity: for payoff function $u$ and $v$, $\phi(u+v) = \phi(u) + \phi(v)$. The solution to the sum of two games must be equal to the sum of payoff of each game.



**2.2 Theorem**

There exists a unique function $\phi$ that satisfies the Shapley axioms.




*Example: A group of customers must be connected to a power plant provided by a central facility. A customer can either connect to the facility directly, or connect to some other connected customer.*

*In this coalitional game $(N, v)$, $N$ is the set of customers, and $v(S) = ($the cost of connecting all customers directly to the facility$)- ($the cost of the minimum spanning tree that connects all customers in $S$ and the facility)*



**1.2 Payoff vector and the core**

For a coalition game, we are interested in which coalition to form, and how that coalition divides its payoff among its players. According to superadditivity, this coalition should be $N$. We then need to figure out how the payoff $v(N)$ should be split.

Let $\vec{x} = (x_1, x_2, …, x_n)$ denote the payoff division, where player $i$ 's payoff is $x_i$. Then $\vec{x}$ has two properties:

1. For coalition $N$, $\sum^n_{i=1} x_i = v(N)$
2. A player will only receive payoff that is at least the same as the payoff he could obtain by himself. Therefore, $x_i \ge v(\{i\})$ for all $i$

Suppose we have a coalition $S$ with payoff $v(S)$. For a $\vec{x}$, let the total return be $x(S) = \sum_{i \in S} x_i$. 

The payoff vector is only stable when $x(S) \ge v(S)$; otherwise there must exist $y(S) = v(S)$ where the members could receive more than in $\vec{x}$.



The **core** of a coalitional game is the set $C$ of all stable payoff vectors:

$C = \{\vec{x} = (x_1, …, x_n): \sum_{i \in N} x_i = v(N) \space {\rm{and}} \space x(S) \ge v(S) \space {\rm{for all }} \space S \in N \}$

The first condition is from the first property of $\vec{x}$, and the second condition comes from the stability.



*Example: Consider the following three-person game. Three players can together obtain \$1 to share, any two can obtain $\alpha$ , and a singer player gets nothing.*

*$v(N) = 1$, $v(\{1, 2\}) = v(\{1, 3\}) = v(\{2, 3\}) = \alpha$, $v(\{1\}) = v(\{2\}) = v(\{3\}) = 0$*

*The core of the game is $\{(x_1, x_2, x_3): x_1 + x_2 \ge \alpha, x_1 + x_3 \ge \alpha, x_2 + x_3 \ge \alpha\}$*

*If $\alpha \gt \frac{2}{3}$, the core is empty. If $\alpha = \frac{2}{3}$, the core is $\{ (\frac{1}{3}, \frac{1}{3}, \frac{1}{3}) \}$. Otherwise the core consists of infinite points.*

