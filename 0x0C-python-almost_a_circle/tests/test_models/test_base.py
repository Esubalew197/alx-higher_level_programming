#!/usr/bin/python3
"""Unittest for base
"""

import io
import unittest
from models.base import Base
from models.rectangle import Rectangle
from models.square import Square


class TestBase(unittest.TestCase):
    """Define unit test for base model"""

    def test_initialization(self):
        base1 = Base()
        base2 = Base()
        self.assertEqual(base1.id, 1)
        self.assertEqual(base2.id, 2)

    def test_saving_id(self):
        base = Base(100)
        self.assertEqual(base.id, 100)

    def test_to_json_string_valid(self):
        pass


if __name__ == '__main__':
    unittest.main()
